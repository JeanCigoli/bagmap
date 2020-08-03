import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import cores from '../../styles/cores';
import { Avatar } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { getDataUser } from '../../utils';
import { styles } from './styles';

import ModalRegisterPlaces from '../../components/ModalRegisterPlaces';



const RegisterPlaces = ({ action, namePlacesByUsers, nameBack }) => {

    const [myPosition, setMyPosition] = useState(null)
    const [userStorage, setUserStorage] = useState(null)
    const [visibility, setVisibility] = useState(false)

    async function loadInitialLocation() {

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
    }


    const goDrawerNavigation = () => {
        action.navigate(namePlacesByUsers);
    }

    useEffect(() => {
        getData();
    }, []);

    useLayoutEffect(() => {
        loadInitialLocation();
    }, [])

    const getData = async () => {
        const dataUser = await getDataUser();
        setUserStorage(JSON.parse(dataUser));
    }

    const goRegisterPlace = () => {
        setVisibility(true);
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.containerMap}
                initialRegion={myPosition}
                rotateEnabled={false}
                showsBuildings={false}
                showsPointsOfInterest={false}
                showsUserLocation
                loadingEnabled
            >
                {myPosition && (
                    <Marker coordinate={
                        { latitude: myPosition.latitude, longitude: myPosition.longitude }
                    }>

                    </Marker>
                )}

            </MapView>
            <View style={styles.containerTopOne}>
                <TouchableOpacity style={styles.btnMenu} onPress={goDrawerNavigation}>
                    <IconFont name={"stream"} size={40} color={cores.green_darker} />
                    {/* <Icon name={"md-menu"} size={55} style={styles.icon} color={cores.green_darker} /> */}
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnProfile}>
                    {/* <Icon name={"user"} size={55} color={"#949494"} /> */}
                    <Avatar.Image size={62} source={{
                        uri: userStorage ? userStorage.image : 'https://br.freepik.com/icones-gratis/usuario-pessoa-retrato_755638.htm#page=1&query=user&position=22'
                    }} />
                </TouchableOpacity>
                <Text style={styles.txtViewProfile}>Ver Perfil</Text>
            </View>

            <TouchableOpacity style={styles.buttonCreatePlaces} onPress={goRegisterPlace} >
                <IconMaterial name="map-marker-radius" size={30} color={cores.white} />
            </TouchableOpacity>

            <ModalRegisterPlaces
                visible={visibility}
                titulo={"Novo Ponto"}
                name={"Adicione um nome..."}
                description={"Adicione uma descrição..."}
                action={action}
                nameBack={nameBack}
            // img={"../../../assets/imgRegistrationOk.png"} 
            // action={registerPlace}
            />

        </View>
    )
}

export default RegisterPlaces;