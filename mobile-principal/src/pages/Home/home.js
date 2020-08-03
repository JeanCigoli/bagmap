import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import IconTwo from 'react-native-vector-icons/MaterialIcons';
import IconThree from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../store/modules/auth/action';
import { getFirstAccess, getDataUser } from '../../utils';
import { createStacknavigator } from '@react-navigation/stack';
import cores from '../../styles/cores';
import  Card from '../../components/Card'; 
import MapView, { Marker } from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';
// import * as Location from 'expo-location';
import { DATA_USER } from '../../config/constant';
import {AsyncStorage} from 'react-native';



const Home = ({ action, namePlacesByUsers, nameAddPlaces, namePosts, nameTips }) => {

    // interface ILocation {
    //     latitude: number;
    //     longitude: number;
    // }
    // const [location, setLocation] = useState<ILocation | undefined>

    // useEffect(() => {
    //     Geolocation.getCurrentPosition(
    //         position => {
    //             const {latitude, longitude} = position.coords;
    //             setLocation({
    //                 latitude,
    //                 longitude,
    //             });
    //         },
    //         error => {
    //             console.log(error.code, error.message);
    //         },
    //         {enableHighAccuracy:true, timeout: 15000, maximumAge:10000},
    //     );
    // }, []);
   

    const user = useSelector(state => state.auth.user);
    const fetching = useSelector(state => state.auth.fetching);
    const dispatch = useDispatch();

    const [userStorage, setUserStorage] = useState(null)
    // const firstName = user.namePerson.split(" ")[0];
    // const name = user.namePerson;
    


    const goDrawerNavigation = () => { 
        action.navigate(namePlacesByUsers);
    }

    const goLibraryPlacesByUsers = () => {
        action.navigate(namePlacesByUsers);
    }

    
    const goAddPlaces = () => {
        action.navigate(nameAddPlaces);
    }

    const goPosts = () => {
        action.navigate(namePosts);
    }

    useEffect(() => {
        getAccess();
        getData();
    }, []);

    const getAccess = async () => {
        const firstAccess = await getFirstAccess();

        if(!firstAccess) {
            action.push(nameTips);
        }
    }

    const getData = async () =>{
        const dataUser = await getDataUser();
        setUserStorage(JSON.parse(dataUser));
    }

//    const firstName = userStorage.namePerson.split(" ")[0];

    return (
        <View style={styles.container}>
            <View style={styles.containerTopOne}>
                <TouchableOpacity style={styles.btnMenu} onPress={goDrawerNavigation}>
                    <IconThree name={"stream"} size={40} color={cores.green_darker} />
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
            <Text 
              style={styles.txtRememberPassword} 
              onPress={() => { dispatch(logout())}}> Logout </Text>
            <View style={styles.container}>
            {/* <Text 
              style={styles.txtRememberPassword} 
              onPress={() => { dispatch(logout())}}> logout </Text> */}
                <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>

                    <View style={styles.containerTopTwo}>
                        <Text style={styles.txtHelloPerson}>Olá,{userStorage ? userStorage.namePerson.split(" ")[0] : ''}</Text>
                        <View style={styles.underlineTxtHello} />
                    </View>
                    <View style={styles.containerAlertFindPlaces}>
                        <View style={styles.containerInformationFindPlaces}>
                            <Text style={styles.txtFindLostPlaces}>
                                {`Encontre lugares\n perdidos, adicionados\n por usuários`}
                            </Text>
                            <Image source={require("../../../assets/logo.png")} style={styles.imageLogo} />
                            <Text style={styles.txtBranch}>Bagmap</Text>
                        </View>
                        <View style={styles.containerImage}>
                            <Image source={require("../../../assets/imgSearchHome.png")} />
                        </View>
                    </View>
                    <View style={styles.containerPlacesByUsers}>
                        <View style={styles.containerTitleCategory}>
                            <Text style={styles.txtCategory}> Lugares adicionados pelos usuários </Text>
                            <TouchableOpacity style={styles.underlineTxtCategory} onPress={goLibraryPlacesByUsers}/>
                        </View>
                        <View style={styles.containerCards}>
                            <ScrollView horizontal={true} style={styles.containerScroll} showsHorizontalScrollIndicator={false}>
                                <Card img={require("../../../assets/teste.png")} text={"Lagoinha, Ubatuba..."}/>
                                <Card img={require("../../../assets/testeTres.png")} text={"Tilha da Mantiqueira-Ubatuba..."}/>
                                <Card img={require("../../../assets/testeDois.png")} text={"Tilha da Mantiqueira-Ubatuba.."}/>
                                <TouchableOpacity style={styles.card} onPress={goLibraryPlacesByUsers}> 
                                    <View style={styles.cardBall} >
                                        <IconTwo name={"more"} color={"#c7c7c7"} size={50}/>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>     
                    </View>
                    <View style={styles.containerAddPlaces}>
                            <View style={styles.containerInformationAddPlaces}>
                                <Text style={styles.txtInformationAddPlaces}>
                                    {`Crie também um novo \n lugar`}
                                </Text>
                                <Text style={styles.txtShareWithFriends}>
                                    Compartilhe com seus amigos
                                </Text>
                                <TouchableOpacity style={styles.btnAddPlace} onPress={goAddPlaces}>
                                    <IconTwo name={"add"} size={50} color={cores.white}/>
                                </TouchableOpacity>
                            </View>
                    </View>
                    <View style={styles.containerPosts}>
                        <View style={styles.containerTitlePosts}>
                            <Text style={styles.txtPosts}> Posts </Text>
                            <TouchableOpacity style={styles.underlineTxtPosts} onPress={goPosts} />
                         </View>
                         <View style={styles.containerPost}>
                            <View style={styles.containerPostOne}>
                                <View style={styles.containerCardPost}>
                                    <Image source={require("../../../assets/teste.png")}/>
                                    <Text style={styles.txtUser}> 
                                            lisa_oliveira02
                                    </Text>
                                </View>
                                <View style={styles.containerCardPost}>
                                    <Image source={require("../../../assets/teste.png")}/>
                                    <Text style={styles.txtUser}> 
                                            _julinha_
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.containerPostTwo}>
                                <View style={styles.containerCardPost}>
                                    <Image source={require("../../../assets/teste.png")}/>
                                    <Text style={styles.txtUser}> 
                                            sarah_30
                                    </Text>
                                </View>
                                <View style={styles.containerCardPost}>
                                    <Image source={require("../../../assets/teste.png")}/>
                                    <Text style={styles.txtUser}> 
                                            rogerinho_02
                                    </Text>
                                </View>
                            </View>
                         </View>
                    </View>
                    <View style={styles.containerMaps}>
                        {/* {location &&( */}
                            <MapView style={styles.containerContentMaps}
                            // initialRegion={{
                            //     latitude: location.latitude,
                            //     longitude: location.longitude,
                            //     latitudeDelta: 0.0922,
                            //     longitudeDelta: 0.421
                            // }}
                            >   
                            {/* <Marker
                                coordinate={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                }}
                            />     */}
                            </MapView>
                         {/* )} */}
                    </View>
                    <View style={styles.containerEstablishment}> 
                        <View style={styles.containerTitleCategory}>
                            <Text style={styles.txtCategory}>Estabelecimentos </Text>
                            <TouchableOpacity style={styles.underlineTxtCategory} onPress={goLibraryPlacesByUsers}/>
                        </View>
                        <View style={styles.containerCards}>
                            <ScrollView horizontal={true} style={styles.containerScroll} showsHorizontalScrollIndicator={false}>
                                <Card img={require("../../../assets/teste.png")} text={"Lagoinha, Ubatuba..."}/>
                                <Card img={require("../../../assets/testeTres.png")} text={"Tilha da Mantiqueira-Ubatuba..."}/>
                                <Card img={require("../../../assets/testeDois.png")} text={"Tilha da Mantiqueira-Ubatuba.."}/>
                                <View style={styles.card}> 
                                    <TouchableOpacity style={styles.cardBall} onPress={goLibraryPlacesByUsers}>
                                        <IconTwo name={"more"} color={"#c7c7c7"} size={50}/>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>     
                    </View>
                </ScrollView>
            </View>


        </View>
    )
}

export default Home;