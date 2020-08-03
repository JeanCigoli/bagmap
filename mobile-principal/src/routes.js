import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './pages/Index/index';
import Login from './pages/Login/login';
import RegisterAddress from './pages/Register/Address/registerAddress';
import RegisterPerson from './pages/Register/Person/PersonalData/registerPerson';
import RegisterUser from './pages/Register/Person/RegisterUser/registerUser';

import Tips from './pages/Tips';

import Home from './pages/Home/home';
import SearchPlaces from './pages/SearchPlaces/searchPlaces';
import Posts from './pages/Posts/posts';
import RegisterPlace from './pages/RegisterPlace/registerPlace';
import TabNavigation from './pages/TabNavigation/index';


import LibraryPlacesByUsers from './pages/LibraryPlacesByUsers/libraryPlacesByUsers';

import { getToken } from './utils';




//iniciando a navegação
const Stack = createStackNavigator();

const Routes = () => {

  const signed = useSelector((state) => state.auth.signed);
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    getTokenAuth();
  }, []);

  const getTokenAuth = async () => {
    const token = await getToken();
    setIsAuth(token);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuth ? "TabNavigation" : "Index"}>
        {isAuth || signed ? (
          <>
            <Stack.Screen
              name="TabNavigation"
              component={TabNavigation}
              options={
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={
                {
                  headerShown: false,
                }
              } />
            <Stack.Screen
              name="Tips"
              component={Tips}
              options={
                {
                  headerShown: false
                }
              }
            />
            <Stack.Screen
              name="SearchPlaces"
              component={SearchPlaces}
              options={
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name="Posts"
              component={Posts}
              options={
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name="RegisterPlace"
              component={RegisterPlace}
              options={
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name="LibraryPlacesByUsers"
              component={LibraryPlacesByUsers}
              options={
                {
                  headerShown: false,
                }
              }
            />
          </>
        ) : (
            <>

              <Stack.Screen
                name="Index"
                component={Index}
                options={
                  {
                    headerShown: false,
                  }
                } />
              <Stack.Screen
                name="Login"
                component={Login}
                options={
                  {
                    headerShown: false,
                  }
                } />
              <Stack.Screen
                name="RegisterAddress"
                component={RegisterAddress}
                options={
                  {
                    headerShown: false,
                  }
                } />
              <Stack.Screen
                name="RegisterPerson"
                component={RegisterPerson}
                options={
                  {
                    headerShown: false,
                  }
                } />

              <Stack.Screen
                name="RegisterUser"
                component={RegisterUser}
                options={
                  {
                    headerShown: false,
                  }
                }
              />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;