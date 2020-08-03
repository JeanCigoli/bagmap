import React, { useState, useEffect } from "react";
import {
  ContainerDiv,
  Container,
  Title,
  ContainerFlex,
  HomeBanner,
  ContainerSearch,
  HeaderContent,
  Map,
  Tour,
  Places,
  Circle,
  Establishment,
} from "./styled";
import SliderCarousel from "./Slider";
import { Search } from "components/Search";
import home from "assets/home.png";
import Modal from "components/Modal";
import { Portal } from "./styled";
import { ButtonSecondary } from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "store/modules/modal/actions";
import { sendLocation } from "store/modules/auth/action";
import Lottie from "react-lottie";
import animationData from "assets/lottie/location.json";
import {
  sendClearHome,
  newSearch,
  newSearchBranch,
} from "store/modules/home/action";
import MapsHome from "./Maps";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import { fetchPlaces } from "store/modules/places/action";

const Home = () => {
  const dispatch = useDispatch();

  const location = useSelector((state) => state.auth.location);
  const dataPlaces = useSelector((state) => state.home.data);
  const dataBranch = useSelector((state) => state.home.dataBranch);
  const dataPlace = useSelector((state) => state.places.data);
  const fetching = useSelector((state) => state.home.fetching);

  const [lottie, setLottie] = useState({ isStopped: false, isPaused: false });

  useEffect(() => {
    if ("geolocation" in navigator && location && !location.latitude) {
      dispatch(showModal("open", 20));
      dispatch(sendClearHome());
    }
  }, []);

  useEffect(() => {
    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  useEffect(() => {
    if (!dataPlaces.length) {
      if (!location) {
        dispatch(
          newSearch("Pontos Turísticos", location, "tourist_attraction")
        );
        dispatch(newSearchBranch("Restaurantes", location, "restaurant"));
        // dispatch(fetchPlaces("Lugares", 0, 20));
      } else if (location?.latitude) {
        dispatch(
          newSearch("Pontos Turísticos", location, "tourist_attraction")
        );
        dispatch(newSearchBranch("Restaurantes", location, "restaurant"));
        // dispatch(fetchPlaces("Lugares", 0, 20));
      }
    }
  }, [location]);

  const handleClick = (id) => {
    setLottie({ isStopped: true, isPaused: true });
    navigator.geolocation.getCurrentPosition((location) => {
      dispatch(
        sendLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      );
      dispatch(showModal("close", id));
      dispatch(sendClearHome());
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Title>BagMap</Title>

      <ContainerFlex>
        <HomeBanner>
          <div>
            <h1>
              Faça uma busca de lugares perdidos e crie sua viagem dos sonhos.
            </h1>
            <p>
              Aqui você pode encontrar lugares adicionados pelos próprios
              usuário e ajudar adicionando os lugares que você descobriu.
            </p>
          </div>
          <div>
            <img src={home} alt="Imagem banner" />
          </div>
        </HomeBanner>

        <ContainerSearch>
          <Search />
        </ContainerSearch>

        <Places>
          <div className="map">
            <MapsHome location={location} placesAll={dataPlaces} />
          </div>
          <div className="places">
                  
            {dataPlace.length !== 0 &&
              dataPlace.map((places) => (
                <SliderCarousel
                  text={"Principais lugares adicionados pelos usuário"}
                  reducer={500}
                  marginTop={"0px"}
                  key={Math.random()}
                >
                  {places.items.content.length !== 0 && (
                    <>
                      {places.items.content.map((card) => (
                        <ContainerDiv key={card.idBranch}>
                          <Link
                            to={`/lugar/detalhes/${card.idBranch}?type=place`}
                          >
                            {card.image && (
                              <img src={card.image} alt={card.nameBranch} />
                            )}
                            <p>{card.nameBranch}</p>
                          </Link>
                        </ContainerDiv>
                      ))}
                    </>
                  )}
                </SliderCarousel>
              ))}
            {dataBranch.length !== 0 &&
              dataBranch.map((places) => (
                <SliderCarousel
                  text={"Estabelecimentos"}
                  reducer={500}
                  marginTop={"20px"}
                  key={Math.random()}
                >
                  {places.items.content.length !== 0 && (
                    <>
                      {places.items.content.map((card) => (
                        <ContainerDiv key={card.idBranch}>
                          <Link
                            to={`/lugar/detalhes/${card.idBranch}?type=bagmap`}
                          >
                            {card.image && (
                              <img src={card.image} alt={card.nameBranch} />
                            )}
                            <p>{card.nameBranch}</p>
                          </Link>
                        </ContainerDiv>
                      ))}
                    </>
                  )}
                </SliderCarousel>
              ))}
          </div>
        </Places>

        <Tour>
          <div className="container">
            <h1>
              Passeio em destaque
              <div className="border"></div>
            </h1>
            <p>
              Ir à pequena cidade de Maragogi, no norte de Alagoas , é se sentir
              no Caribe sem precisar deixar o Brasil. As praias paradisíacas –
              de densos coqueirais, águas límpidas e esverdeadas – fazem jus à
              comparação.
            </p>

            <div className="description">
              <div className="Img">
                <img
                  src="https://abrilviagemeturismo.files.wordpress.com/2020/01/destino_mgi_09.jpg?quality=70&strip=info&w=1024&h=576"
                  alt="maragogi"
                />
              </div>
              <h2>Maragogi</h2>
              <p>
                Criada por decreto em outubro de 1997, a APA da Costa dos Corais
                tem 150 km de extensão e abrange quatro municípios de Pernambuco
                (São José da Coroa Grande, Barreiros, Tamandaré e Rio Formoso) e
                nove de Alagoas (além de Maragogi, Barra de Santo Antônio, São
                Luís do Quitunde, Passo de Camarajibe, São Miguel dos Milagres ,
                Porto de Pedras e Japaratinga).
              </p>
            </div>
          </div>
          <Circle></Circle>
          <Circle second={true}></Circle>
        </Tour>

        <Establishment>
          {dataPlaces.length !== 0 &&
            dataPlaces.map((places) => (
              <SliderCarousel
                text={places.title}
                marginTop={"0px"}
                reducer={0}
                key={Math.random()}
              >
                {places.items.map((card) => (
                  <ContainerDiv key={card.place_id}>
                    <Link to={`/lugar/detalhes/${card.place_id}?type=google`}>
                      {card.photos && (
                        <img
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${card.photos[0].photo_reference}&key=${process.env.REACT_APP_API_MAP}`}
                          alt={card.name}
                        />
                      )}
                      <p>{card.name}</p>
                    </Link>
                  </ContainerDiv>
                ))}
              </SliderCarousel>
            ))}
        </Establishment>

        <Footer />
      </ContainerFlex>

      <Modal id={20}>
        <Portal>
          <Lottie
            options={defaultOptions}
            height={280}
            width={280}
            isStopped={lottie.isStopped}
            isPaused={lottie.isPaused}
          />
          <h3>Olá! obrigado por acessar o BagMap.</h3>
          <p>
            Para ajudar você a encontrar os melhores lugares, deseja nos
            informar sua localização?
          </p>

          <HeaderContent>
            <ButtonSecondary
              type="button"
              onClick={() => {
                dispatch(sendLocation(false));
                dispatch(showModal("close", 20));
              }}
              text="Não"
            />
            <ButtonSecondary
              type="button"
              onClick={() => handleClick(20)}
              text="Sim"
            />
          </HeaderContent>
        </Portal>
      </Modal>
    </Container>
  );
};

export default Home;
