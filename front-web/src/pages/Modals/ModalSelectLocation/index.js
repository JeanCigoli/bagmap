import React, { useState, useEffect } from 'react';
import Modal from 'components/Modal';
import { Portal, DivMaps, DivFlex, ContainerSearch, DivContainerMap } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'components/Input';
import { AnimatePresence } from 'framer-motion';
import { OnCreate } from 'components/Animation/TransitionContainer';
import { IoMdClose } from 'react-icons/io';
import { showModal } from 'store/modules/modal/actions';
import imagemRoute from 'assets/rotas.png';
import { FaSearchLocation } from 'react-icons/fa';
import { ButtonPrimary } from 'components/Button';
import { toast } from 'react-toastify';
import { newSearchLocationByAddress, clearRoadMap } from 'store/modules/roadmap/action';

const ModalSelectLocation = ({ handleConfirm }) => {

  const [isAddress, setIsAddress] = useState(true);
  const [input, setInput] = useState('');
  const [markerMap, setMarkerMap] = useState('');

  const google = window.google || {};

  console.log("Google: ", google);

  const dispatch = useDispatch();

  const fetching = useSelector(state => state.roadmap.fetching);
  const address = useSelector(state => state.roadmap.address);

  useEffect(() => {

    if(!isAddress) {
      let map = new google.maps.Map(document.getElementById('map'), {
        center: address?.results[0].geometry.location,
        zoom: 17
      });

      let marker = new google.maps.Marker({
        position: address?.results[0].geometry.location,
        map: map,
        title: 'localização'
      });

      map.addListener('click', e => {
        onMapClicked(e);
        marker.setPosition(e.latLng);
        map.panTo(e.latLng);
      });
    }

  }, [isAddress]);


  useEffect(() => {
    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  useEffect(() => {
    if (address) {
      setIsAddress(false);
      setMarkerMap(address.results[0].geometry.location);
    }
  }, [address]);

  const handleSubmit = () => {
    if (input.length <= 5 || input === '') {
      toast.error("Digite um endereço válido acima de 5 caracteres");
    } else {
      dispatch(newSearchLocationByAddress(input));
    }
  }

  const onMapClicked = (coord) => {

    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setMarkerMap({ lat, lng });
  };

  const closeModal = () => {
    dispatch(clearRoadMap());
    dispatch(showModal("close", 50));
  }

  return (
    <Modal id={50}>
      <Portal>

        <div className="header">

          <h1>Busca por endereço</h1>

          <IoMdClose onClick={closeModal} />

        </div>

        <DivMaps>

          {isAddress ? (
            <AnimatePresence>
              <OnCreate>

                <DivFlex>

                  <div className="div-flex">

                    <img src={imagemRoute} alt="Map routes" />

                  </div>

                  <div className="div-flex">

                    <ContainerSearch>

                      <h2>Inicie a busca pelo endereço</h2>

                      <p>Para escolher um lugar no mapa, precisamos que digite primeiro o endereço no campo abaixo.</p>

                      <Input
                        type="text"
                        name="address"
                        id="address"
                        value={input}
                        label="Endereço"
                        onChange={e => setInput(e.target.value)}
                        maxLength={150} />

                      <div className="container-button">

                        <ButtonPrimary
                          type="button"
                          text="Buscar"
                          onClick={handleSubmit}
                          icon={<FaSearchLocation />}
                        />

                      </div>
                    </ContainerSearch>

                  </div>

                </DivFlex>

              </OnCreate>
            </AnimatePresence>
          ) : (
              <OnCreate>
                <DivContainerMap>
                  <DivMaps>
                    <div id="map" style={{ width: "100%", height: "100%" }}>

                    </div>
                  </DivMaps>
                  <div className="container-button">
                    <ButtonPrimary
                      type="button"
                      text="Confirma Localização?"
                      onClick={() => {
                        dispatch(clearRoadMap());
                        handleConfirm(markerMap)
                      }}
                    />
                  </div>
                </DivContainerMap>


              </OnCreate>
            )}
        </DivMaps>

      </Portal>
    </Modal>
  );
}

export default ModalSelectLocation;
