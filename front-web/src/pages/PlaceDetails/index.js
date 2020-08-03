import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerFlex,
  Map,
  ContainerInfo,
  ContainerFlexInfo,
  PlacesAdd,
  ContainerPhotos,
  Details,
  AntTab,
  AntTabs,
  Img,
  useStyles,
  MapView,
  TitleCenter,
} from "./styled";
import ModalDistance from "pages/Modals/ModalDistance";
import { MdPhone } from "react-icons/md";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
} from "@material-ui/core";
import { FaMapMarkedAlt, FaGlobe, FaMapSigns } from "react-icons/fa";
import history from "services/history";
import { TiArrowBack } from "react-icons/ti";
import Box from "@material-ui/core/Box";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { showModal } from "store/modules/modal/actions";
import { fetchDetailsBranch, clearBranch } from "store/modules/branch/action";
import { fetchDetailsGoogle, clearGoogle } from "store/modules/google/action";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./Slider";
import { ButtonPrimary } from "components/Button";

const PlaceDetails = ({ location }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const google = window.google || {};

  const typesPlace = useSelector((state) => state.home.typePlace);
  const locationUser = useSelector((state) => state.auth.location);
  const dataBranch = useSelector((state) => state.branch.details);
  const dataGoogle = useSelector((state) => state.google.details);
  const fetchingBranch = useSelector((state) => state.branch.fetching);
  const fetchingGoogle = useSelector((state) => state.google.fetching);

  const [data, setData] = useState(null);
  const [branch, setBranch] = useState(null);
  const [map, setMap] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");

    switch (type) {
      case "google":
        dispatch(fetchDetailsGoogle(id));
        break;
      case "bagmap":
        dispatch(fetchDetailsBranch(id));
        break;
      default:
        toast.error("Não foi encontrado o tipo do lugar");
        break;
    }

    return () => {
      dispatch(clearGoogle());
      dispatch(clearBranch());
    };
  }, []);

  useEffect(() => {
    if (fetchingBranch || fetchingGoogle) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetchingBranch, fetchingGoogle]);

  useEffect(() => {
    let map;

    if (dataGoogle) {
      const dataJson = JSON.parse(dataGoogle);
      setData(dataJson);

      var contentString = `<div className="content">${dataJson.result.name}</div>`;

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      map = new google.maps.Map(document.getElementById("map"), {
        center: dataJson.result.geometry.location,
        zoom: 15,
      });

      let marker = new google.maps.Marker({
        position: dataJson.result.geometry.location,
        map: map,
        icon: dataJson.result.icon,
      });

      marker.addListener("click", function () {
        infowindow.open(map, marker);
      });
    }

    if (dataBranch) {
      setBranch(dataBranch);

      var contentString = `<div className="content">${dataBranch.nameBranch}</div>`;

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: dataBranch.latitude,
          lng: dataBranch.longitude,
        },
        zoom: 15,
      });

      let marker = new google.maps.Marker({
        position: {
          lat: dataBranch.latitude,
          lng: dataBranch.longitude,
        },
        map: map,
      });

      marker.addListener("click", function () {
        infowindow.open(map, marker);
      });
    }
    setMap(map);
  }, [dataGoogle, dataBranch]);

  const back = () => {
    history.goBack(-1);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        className="avaliation"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Title>
          <TiArrowBack onClick={back} />
          {data && data.result.name}
          {branch && branch.nameBranch}
        </Title>
        <ContainerFlex>
          <div className="container">
            <div className="container-card">
              <div className="info">
                <Img>
                  {data && (
                    <img
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${data.result.photos[0].photo_reference}&key=${process.env.REACT_APP_API_MAP}`}
                      alt={data.result.name}
                    />
                  )}

                  {branch && <img src={branch.image} alt={branch.nameBranch} />}
                </Img>

                <ContainerInfo>
                  <ContainerFlexInfo>
                    {data &&
                      data.result.types.map((type) => {
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
                    {branch && (
                      <button key={branch.typePlace.id} className="button">
                        <strong>{branch.typePlace.name}</strong>
                      </button>
                    )}
                  </ContainerFlexInfo>

                  <div className="post-info">
                    <h1 className="post-title">
                      {data && data.result.name} 
                      {branch && branch.nameBranch}</h1>
                    <div className="description">
                      <p className="post-text">
                        
                        {data && (
                        <>
                          <FaGlobe /> 
                          {data.result.website} 
                          </>
                        )}
                      </p>

                      <p className="post-text">
                        <MdPhone />
                        {data && data.result.formatted_phone_number}
                        {branch && branch.phoneBranch}
                      </p>
                    </div>
                  </div>
                </ContainerInfo>
              </div>

              <MapView>
                <p>Veja como chegar!</p>

                <div className="button">
                  <ButtonPrimary
                    type="button"
                    text="Rotas"
                    onClick={() => {
                      dispatch(showModal("open", 51));
                    }}
                    icon={<FaMapSigns />}
                  />
                </div>
              </MapView>
            </div>

            <Details>
              <h1>Detalhes</h1>

              <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="ant example"
              >
                <AntTab label="Descrição" />

                {data && (

                  <AntTab label="Avaliação" />
                )}
              </AntTabs>

              {data && (
                <>
                  <TabPanel value={value} index={0}>
                    
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    {data.result.reviews ? (
                      data.result.reviews.map((card) => (
                        <Card key={card.author_url} className={classes.root}>
                          <CardHeader
                            avatar={
                              <Avatar aria-label="recipe">
                                <img
                                  src={card.profile_photo_url}
                                  alt={card.author_name}
                                />
                              </Avatar>
                            }
                            title={card.author_name}
                            subheader={card.relative_time_description}
                          />
                          <CardContent>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {card.text}
                            </Typography>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <TitleCenter>
                        Este lugar não possui avaliação ainda!
                      </TitleCenter>
                    )}
                  </TabPanel>
                </>
              )}
            </Details>

            <ContainerPhotos>
              <h1>Fotos</h1>
              <PlacesAdd>
                {data && (
                  <Slider>
                    {data.result.photos.map((card) => (
                      <div className="card" key={card.photo_reference}>
                        <img
                          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${card.photo_reference}&key=${process.env.REACT_APP_API_MAP}`}
                          alt={card.photo_reference}
                        />
                      </div>
                    ))}
                  </Slider>
                )}

                {branch && (
                  <Slider>
                    {branch.images.map((card) => (
                      <div className="card" key={card.idImage}>
                        <img
                          src={card.link}
                          alt={branch.nameBranch}
                        />
                      </div>
                    ))}
                  </Slider>
                )}
              </PlacesAdd>
            </ContainerPhotos>
          </div>

          <Map>
            <div className="map">
              <div id="map" style={{ width: "100%", height: "100%" }}></div>
            </div>
          </Map>
        </ContainerFlex>

        <ModalDistance
          location={
            data ? {
              origin: {
                lat: locationUser.latitude,
                lng: locationUser.longitude,
              },
              dest: data.result.geometry.location,
            } : {
              origin: {
                lat: locationUser.latitude,
                lng: locationUser.longitude,
              },
              dest: {
                lat: branch?.latitude,
                lng: branch?.longitude
              },
            }
          }
        />
      </Container>
    </>
  );
};

export default PlaceDetails;
