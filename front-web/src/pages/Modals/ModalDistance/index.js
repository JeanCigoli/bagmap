import React, { useEffect, useState } from 'react';
import Modal from 'components/Modal';
import { IoMdClose } from 'react-icons/io';
import { Portal, DivMaps, DivContainerMap, DivDetails, ContainerData } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from 'store/modules/modal/actions';
import { newSearchDirection, clearRoadMapDistance } from 'store/modules/roadmap/action';
import { FaMapMarkerAlt, FaRoute, FaRegClock } from 'react-icons/fa';
import { IoMdCash } from 'react-icons/io';
import Select from 'components/Select';
import { MAPS_ROUTES } from 'config/constants';

const ModalDistance = ({ location }) => {

  const dispatch = useDispatch();

  const fetching = useSelector(state => state.roadmap.fetching);
  const data = useSelector(state => state.roadmap.direction);
  const distanceModal = useSelector(state => state.modal.distanceModal);

  const google = window.google || {};

  const [distance, setDistance] = useState(null);
  const [travelMode, setTravelMode] = useState('0');
  const [dataTravel, setDataTravel] = useState([]);

  const [directionsService, setDirectionsService] = useState(new google.maps.DirectionsService());
  const [directionsRenderer, setDirectionsRenderer] = useState(new google.maps.DirectionsRenderer());

  const originLocation = new google.maps.LatLng(location?.origin.lat, location?.origin.lng);
  const destinationLocation = new google.maps.LatLng(location?.dest.lat, location?.dest.lng);

  useEffect(() => {
    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  useEffect(() => {
    if (data) {
      setDistance(JSON.parse(data.distance));

      let map = new google.maps.Map(document.getElementById('mapModal'), {
        center: location.origin,
        zoom: 12
      });

      directionsRenderer.setMap(map);
    }
  }, [data]);

  useEffect(() => {
    if (distanceModal) {
      if (location) {
        dispatch(newSearchDirection(location));
      }
    }
  }, [distanceModal])

  const handleSelect = (event) => {

    const travel = event.target.value;
    setTravelMode(travel);

    var request = {
      origin: originLocation,
      destination: destinationLocation,
      travelMode: google.maps.TravelMode[travel]
    };
    directionsService.route(request, function (response, status) {
      if (status === 'OK') {
        setDataTravel(response.routes[0]);
        directionsRenderer.setDirections(response);
      }
    });
  }

  const closeModal = () => {
    dispatch(clearRoadMapDistance());
    dispatch(showModal("close", 51));
  }

  return (
    <Modal id={51}>

      <Portal>

        <div className="header">

          <h1>Distância entre os lugares</h1>

          <IoMdClose onClick={closeModal} />

        </div>

        <DivContainerMap>
          <div className="container-details">

            <DivDetails>

              <h2>Detalhes da rota</h2>

              <ContainerData>

                <div className="title"><FaMapMarkerAlt /> Origem</div>
                <p>{distance && distance.origin_addresses[0]}</p>

              </ContainerData>

              <ContainerData>

                <div className="title"><FaMapMarkerAlt /> Destino</div>
                <p>{distance && distance.destination_addresses[0]}</p>

              </ContainerData>

              <Select
                name="travelmode"
                label="Modo de viagem"
                type="text"
                data={travelMode}
                options={MAPS_ROUTES}
                onChange={event => handleSelect(event)}
              />
              {
                dataTravel.length !== 0 && (
                  <>
                    <ContainerData>

                      <div className="title"><FaRoute />Distância</div>
                      <p>{dataTravel.legs[0].distance.text}</p>

                    </ContainerData>

                    <ContainerData>

                      <div className="title"> <FaRegClock />Tempo</div>
                      <p>{dataTravel.legs[0].duration.text}</p>

                    </ContainerData>
                  </>
                )
              }

              {
                dataTravel.fare && (
                  <ContainerData>

                    <div className="title"> <IoMdCash />Gasto do transporte</div>
                    <p>{dataTravel.length !== 0 && dataTravel.fare.text}</p>

                  </ContainerData>
                )
              }

            </DivDetails>

          </div>
          <DivMaps>
            <div id="mapModal" style={{ width: "100%", height: "100%" }}>

            </div>
          </DivMaps>
        </DivContainerMap>
      </Portal>
    </Modal>
  );
}

export default ModalDistance;
