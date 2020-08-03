import React, { useEffect } from "react";
import { ButtonRoute } from "components/Button";
import logoRoteiro from "assets/roteiro.png";
import { Link } from "react-router-dom";
import {
  Places,
  Title,
  Container,
  ContainerFlex,
  ContainerCreate,
  RoadNotFound
} from "./styled";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "utils/index";
import Slide from "./Slider";
import { fetchRoadByUser, clearRoadMap } from "store/modules/roadmap/action";
import { showModal } from "store/modules/modal/actions";

const CreateRoute = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const fetching = useSelector((state) => state.roadmap.fetching);
  const roadMapsAll = useSelector((state) => state.roadmap.roadMapsAll);

  useEffect(() => {
    if(!roadMapsAll) {
      dispatch(fetchRoadByUser(user.idUser));
    }

    return () => {
      dispatch(clearRoadMap());
    }
  }, []);

  useEffect(() => {
    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  return (
    <>
      <Container>
        <Title>Roteiro de Viagens</Title>
        <ContainerFlex>
          <div id="page-home">
            <h2>
              Monte os seus roteiros do sonhos, podendo separar por dia e
              colocando em ordem de visita.
            </h2>

            <p className="sub-title">Seus roteiros</p>
            <Places>
              <Slide>
                {roadMapsAll && (
                  <>
                    {roadMapsAll.roadMaps.length !== 0 ? (
                      roadMapsAll.roadMaps.map((road) => (
                        <div key={road.idRoadMaps} className="card">
                          <Link to={`/rotas/roteiro/${road.idRoadMaps}`}>
                            <img src={road.banner} alt={road.name} />

                            <p>{road.name}</p>
                          </Link>
                        </div>
                      ))
                    ) : (
                      <RoadNotFound>Você não possui nenhum roteiro cadastrado</RoadNotFound>
                    )}
                  </>
                )}
              </Slide>
            </Places>
          </div>

          <ContainerCreate>
            <p>Comece a criação de um novo roteiro agora.</p>

            <div className="button">
              <Link to="/rotas/register">
                <ButtonRoute
                  text="Crie um novo roteiro"
                  icon={<FaMapMarkerAlt />}
                />
              </Link>
            </div>

            <footer>
              <img src={logoRoteiro} alt="Roteiro" />
            </footer>
          </ContainerCreate>
        </ContainerFlex>
      </Container>
    </>
  );
};

export default CreateRoute;
