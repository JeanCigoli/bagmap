import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerFlex,
  Map,
  ContainerInfo,
  ContainerFlexInfo,
  Search,
  PlacesAdd,
  ContainerSave,
} from "./styled";
import { FaPlus } from "react-icons/fa";
import { SearchInput } from "components/Search";
import { useDispatch, useSelector } from "react-redux";
import MapsRoad from "./Maps";
import { ButtonPrimary } from "components/Button";
import ModalPlace from "./ModalPlace";
import { showModal } from "store/modules/modal/actions";
import { fetchAllPlacesLocation } from "store/modules/google/action";
import { createPlacesRoad } from "store/modules/placeroad/action";
import history from "services/history";
import { jsonPlaceRoadRegister } from "utils/json";
import { FiSave } from "react-icons/fi";

const RoteirosAdd = () => {
  const dispatch = useDispatch();

  const fetching = useSelector((state) => state.roadmap.fetching);
  const fetchingGoogle = useSelector((state) => state.google.fetching);
  const fetchingPlace = useSelector((state) => state.placeroad.fetching);
  const places = useSelector((state) => state.google.places);
  const roadMap = useSelector((state) => state.roadmap.roadMap);
  const typesPlace = useSelector((state) => state.home.typePlace);

  const [placesSelected, setPlacesSelected] = useState([]);
  const [api, setApi] = useState(null);
  const [location, setLocation] = useState(null);
  const [placeMain, setPlaceMain] = useState(null);

  useEffect(() => {
    if (roadMap) {
      dispatch(
        fetchAllPlacesLocation({
          latitude: roadMap.latitude,
          longitude: roadMap.longitude,
          type: "tourist_attraction",
        })
      );
    } else {
      history.push("/rotas");
    }
  }, [roadMap]);

  useEffect(() => {
    if (fetching || fetchingGoogle || fetchingPlace) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching, fetchingGoogle, fetchingPlace]);

  useEffect(() => {
    if (places) {
      setApi(JSON.parse(places));
    }
  }, [places]);

  const handleSearch = (text, select) => {
    dispatch(
      fetchAllPlacesLocation({
        latitude: roadMap.latitude,
        longitude: roadMap.longitude,
        type: select,
        search: text,
      })
    );
  };

  const openConfirm = (place) => {
    setPlaceMain(place);
    dispatch(showModal("open", 26));
  };

  const handleLocation = (location) => {
    setLocation(location);
  };

  const onSubmit = () => {
    const jsonFormat = jsonPlaceRoadRegister(placesSelected, roadMap);
    dispatch(createPlacesRoad(jsonFormat));
  };

  return (
    <Container>
      <Title>{roadMap ? roadMap.name : "Nome do Roteiro"}</Title>
      <ContainerFlex>
        <div className="container">
          <Search>
            <SearchInput submitSearch={handleSearch} />
          </Search>

          <div className="container-card">
            {api && (
              <>
                {api.results.length !== 0 &&
                  api.results.map((place) => (
                    <section key={place.place_id} className="timeline-area">
                      <div className="info">
                        <div className="add">
                          <FaPlus
                            size={32}
                            onClick={() => openConfirm(place)}
                          />
                        </div>

                        <div className="imgPlace">
                          {place.photos && (
                            <img
                              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.REACT_APP_API_MAP}`}
                              alt={place.name}
                            />
                          )}
                        </div>

                        <ContainerInfo>
                          <ContainerFlexInfo>
                            {place.types.map((type) => {
                              const typesExist = typesPlace.types.find(
                                (data) => data.nameEn === type
                              );

                              if (typesExist) {
                                return (
                                  <button key={typesExist.id} className="button">
                                    <strong>{typesExist.name}</strong>
                                  </button>
                                );
                              }
                            })}
                          </ContainerFlexInfo>

                          <div className="post-info">
                            <h1 className="post-title">{place.name}</h1>
                            <p className="post-text">
                              {place.formatted_address}
                            </p>

                            <div className="btn-route">
                              <ButtonPrimary
                                type="button"
                                text="Ver Rota"
                                onClick={() =>
                                  handleLocation(place.geometry.location)
                                }
                              />
                            </div>
                          </div>
                        </ContainerInfo>
                      </div>
                    </section>
                  ))}
              </>
            )}
          </div>

          <ContainerSave>
            <p></p>

            <div className="button">
              <ButtonPrimary
                type="button"
                text="Salvar"
                onClick={onSubmit}
                icon={<FiSave />}
              />
            </div>
          </ContainerSave>
        </div>

        <Map>
          <div className="map">
            {roadMap && (
              <MapsRoad
                location={location}
                initial={{
                  lat: roadMap.latitude,
                  lng: roadMap.longitude,
                }}
              />
            )}
          </div>

          <h1>Lugares Adicionados</h1>
          <PlacesAdd>
            {placesSelected.length !== 0 &&
              placesSelected.map((place) => (
                <div key={place.idPlace} className="card">
                  <img src={place.image} alt={place.name} />
                </div>
              ))}
          </PlacesAdd>
        </Map>
      </ContainerFlex>

      <ModalPlace
        placeMain={placeMain}
        setPlaceMain={setPlaceMain}
        setPlacesSelected={setPlacesSelected}
        placesSelected={placesSelected}
      />
    </Container>
  );
};

export default RoteirosAdd;
