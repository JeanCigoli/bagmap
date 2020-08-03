import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import cores from '../../styles/cores';

import Home from '../Home/home';
import SearchPlaces from '../SearchPlaces/searchPlaces';
import Posts from '../Posts/posts';
import RegisterPlace from '../RegisterPlace/registerPlace';
import LibraryPlacesByUsers from '../LibraryPlacesByUsers/libraryPlacesByUsers';

import Tips from '../Tips/index';
// import DrawerNavigator from '../DrawerNavigation/index';

const TabNavigation = ({navigation}) => {

    const Tab = createMaterialBottomTabNavigator();
    const Stack = createStackNavigator();


    //pages 
    const LibraryPlacesByUsersScreen = () => {
        return (
            <LibraryPlacesByUsers/>
        )
    }

    const TipsScreen = () => {
        return (
           <Tips action={navigation} nameHome={"Home"}/>
        )
    }

    const DrawerNavigator = () => {
        return (
            <DrawerNavigator/>
        )
    }

    //Stacks
    const StackHome = () => {
        return (

            <Stack.Navigator>
                <Stack.Screen name="Home" options={
                    {
                        headerShown: false,
                    }
                } component={HomeScreen} />
                <Stack.Screen name="LibraryPlacesByUsers" 
                // options={{
                //     headerShown: false,
                // }} 
                component={LibraryPlacesByUsersScreen} />
                <Stack.Screen name="Tips" 
              
              
                component={TipsScreen} />
            </Stack.Navigator>

        )
    }

    //TabNavigation
    const HomeScreen = () => {
        return (
            <Home action={navigation} namePlacesByUsers={"LibraryPlacesByUsers"} nameAddPlaces={"Adicionar Lugar"} namePosts={"Posts"} nameTips={"Tips"}  />
        )
    }

    const SearchPlacesScreen = () => {
        return (
            <SearchPlaces />
        )
    }

    const PostsScreen = () => {
        return (
            <Posts />
        )
    }
    const RegisterPlaceScreen = () => {
        return (
            <RegisterPlace action={navigation} namePlacesByUsers={"LibraryPlacesByUsers"} nameBack={"Adicionar Lugar"} />
        )
    }



    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#31635a"
            barStyle={{ backgroundColor: cores.green_darker }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Buscar') {
                        iconName = focused ? 'search' : 'search';
                    } else if (route.name === 'Posts') {
                        iconName = focused ? 'collections' : 'collections';
                    } else if (route.name === 'Adicionar Lugar') {
                        iconName = focused ? 'add-to-photos' : 'add-to-photos';
                    }

                    return <Icon name={iconName} size={26} color={color} />
                },
            })}
        >
            <Tab.Screen name="Home" component={StackHome} />
            <Tab.Screen name="Buscar" component={SearchPlacesScreen} />
            <Tab.Screen name="Posts" component={PostsScreen} />
            <Tab.Screen name="Adicionar Lugar" component={RegisterPlaceScreen} />

        </Tab.Navigator>

    );
}
export default TabNavigation;