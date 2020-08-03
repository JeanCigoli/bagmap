import React, { useEffect, useState } from "react";

import {
  Title,
  Container,
  ContainerFlex,
  Map,
  Edition,
  ContainerInfo,
  ContainerFlexInfo,
  ButtonDays,
  Days,
} from "./styled";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPlacesByRoad,
  clearRoadMapNav,
  sendRoadMap,
} from "store/modules/roadmap/action";
import { showModal } from "store/modules/modal/actions";
import MapsRoad from "./Maps";
import { ButtonPrimary } from "components/Button";
import history from "services/history";

const Roteiro = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const fetching = useSelector((state) => state.roadmap.fetching);
  const roadMapAll = useSelector((state) => state.roadmap.roadMapsAll);
  const placesRoad = useSelector((state) => state.roadmap.placesRoad);

  const [road, setRoad] = useState(null);
  const [daysButton, setDaysButton] = useState([]);
  const [daySelect, setDaySelect] = useState(1);
  const [places, setPlaces] = useState(null);
  const [location, setLocation] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (!roadMapAll) {
      history.push("/rotas");
    } else {
      const roadSearch = roadMapAll.roadMaps.find(
        (data) => data.idRoadMaps === parseInt(id)
      );
      dispatch(fetchPlacesByRoad(roadSearch.idRoadMaps));
      setRoad(roadSearch);
      dispatch(sendRoadMap(roadSearch));

      const arrayBtn = [];

      for (let i = 1; i <= roadSearch.days; i++) {
        arrayBtn.push(
          <ButtonDays
            key={i}
            onClick={() => setDaySelect(i)}
          >
            <p>Dia {i} </p>
          </ButtonDays>
        );
      }

      setDaysButton(arrayBtn);
    }

    return () => {
      dispatch(clearRoadMapNav());
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  useEffect(() => {
    if (placesRoad) {
      console.log(placesRoad);
      const roads = placesRoad.places.filter((data) => data.road.day === daySelect);
      setPlaces(roads);
    }
  }, [placesRoad]);

  useEffect(() => {
    if (placesRoad) {
      const roads = placesRoad.places.filter((data) => data.road.day === daySelect);
      setPlaces(roads);
    }
  }, [daySelect]);

  const handleLocation = (location) => {
    setLocation(location);
  }

  return (
    <>
      <Container>
        <Title>{road && road.name}</Title>
        <ContainerFlex>
          <div className="container">
            <Edition>
              <p>Adicionar mais lugares?</p>

              <div className="button-edit">
                <Link to={`/rotas/register/roteiro/${id}`}>
                  <ButtonPrimary type="button" icon={<FaEdit />} />
                </Link>
              </div>
            </Edition>
            <Days>
              {daysButton.length !== 0 && daysButton.map((btn) => btn)}
            </Days>

            <div className="container-card">
              {places &&
                places.map((place) => (
                  <section
                    key={JSON.parse(place.place).result.place_id}
                    className="timeline-area"
                  >
                    <div className="info">
                      <Link to="/lugar/detalhes">
                        <div className="imgPlace">
                          {JSON.parse(place.place).result.photos && (
                            <img
                              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${JSON.parse(place.place).result.photos[0].photo_reference}&key=${process.env.REACT_APP_API_MAP}`}
                              alt={place.name}
                            />
                          )}
                        </div>
                      </Link>

                      <ContainerInfo>

                        <div className="post-info">
                          <h1 className="post-title">{JSON.parse(place.place).result.name}</h1>
                          <h1 className="post-text">
                            { place.road.description }
                          </h1>

                          <div className="btn-route">
                            <ButtonPrimary 
                              type="button" 
                              text="Ver Rota" 
                              onClick={() => handleLocation(JSON.parse(place.place).result.geometry.location)} />
                          </div>
                        </div>
                      </ContainerInfo>
                    </div>
                  </section>
                ))}
            </div>
          </div>

          <Map>
            {road && (
              <MapsRoad
                location={location}
                initial={{
                  lat: road.latitude,
                  lng: road.longitude,
                }}
              />
            )}
          </Map>
        </ContainerFlex>
      </Container>
    </>
  );
};

export default Roteiro;
