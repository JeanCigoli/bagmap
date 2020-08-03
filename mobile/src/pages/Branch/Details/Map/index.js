import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View, Text } from "react-native";
import { styles } from "./styled";

const ModalMap = ({ location, name }) => {

  return (
    <MapView
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      }}
      style={styles.map}
      loadingEnabled
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
        >
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.type}>Localização da sua filial</Text>
            </View>
          </Callout>
        </Marker>
      )}
    </MapView>
  );
};

export default ModalMap;
