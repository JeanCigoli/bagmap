import React, { useState, useLayoutEffect, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Searchbar } from "react-native-paper";
import { newSearchLocationByAddress, clearAddress } from '../../../../../store/modules/address/action';
import cores from "../../../../../styles/cores";
import { styles } from "./styled";

const ModalMap = ({ setOpenMap, openMap, setLocation }) => {

  const dispatch = useDispatch();

  const address = useSelector(state => state.address.address);
  const fetching = useSelector(state => state.address.fetching);

  const [myPosition, setMyPosition] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [centerMap, setCenterMap] = useState(null);
  const [search, setSearch] = useState('');

  const loadInitialLocation = async () => {
    const { granted } = await requestPermissionsAsync();

    if (granted) {
      const { coords } = await getCurrentPositionAsync({
        enableHighAccuracy: true,
      });

      const { latitude, longitude } = coords;

      setMyPosition({
        latitude,
        longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      });
    }
  };

  const handleRegionChanged = (region) => {
    const { latitude, longitude } = region;
    setCenterMap({ latitude, longitude });
  };

  useLayoutEffect(() => {
    loadInitialLocation();
  }, []);

  useEffect(() => {
    if(address) {
      setCurrentPosition({
        latitude: address.results[0].geometry.location.lat,
        longitude: address.results[0].geometry.location.lng,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      });
    }
  }, [address]);
  
  const modalAction = () => {
    setLocation(centerMap);
    dispatch(clearAddress());
    setOpenMap(false);
  };

  const handleAddress = () => {
    dispatch(newSearchLocationByAddress(search));
  }

  return (
    <Modal visible={openMap} onDismiss={modalAction}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <Searchbar
            style={styles.search}
            placeholder="Pesquise um endereço"
            onChangeText={(text) => setSearch(text)}
            autoCorrect={true}
            placeholderTextColor="#00000055"
            iconColor={cores.green_darker}
            value={search}
            onIconPress={handleAddress}
          />
          <MapView
            onRegionChangeComplete={handleRegionChanged}
            initialRegion={myPosition}
            region={currentPosition}
            style={styles.map}
            showsUserLocation
            loadingEnabled
          >
            {centerMap && (
              <Marker
                coordinate={{
                  latitude: centerMap.latitude,
                  longitude: centerMap.longitude,
                }}
              >
                <Callout>
                  <View style={styles.callout}>
                    <Text style={styles.title}>Posição no Mapa</Text>
                    <Text style={styles.type}>
                      Selecione a posição no Mapa
                    </Text>
                  </View>
                </Callout>
              </Marker>
            )}
          </MapView>

          <View style={styles.containerFooter}>
            <TouchableOpacity style={styles.buttonNext} onPress={modalAction}>
              <Text style={styles.txtButtonNext}>Salvar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
};

export default ModalMap;
