import React, { useEffect, useState, useLayoutEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./pages/Index/index";
import Login from "./pages/Login/login";
import RegisterUser from "./pages/Register/User/index.js";
import RegisterPerson from "./pages/Register/Person/index.js";
import ValidCode from "./pages/Register/ValidCode/index.js";
import Home from "./pages/Home";
import Tips from "./pages/Tips";
import RegisterBranch from "./pages/Branch/Register";
import BranchDetails from "./pages/Branch/Details";
import RegisterEstablishment from "./pages/Establishment/Register";
import { getToken, getUserAutenticate } from "./utils";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const Routes = () => {
  const userRedux = useSelector((state) => state.auth.user);

  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    getTokenAuth();
    getUser();
  }, []);

  const getTokenAuth = async () => {
    const token = await getToken();
    setIsAuth(token);
  };

  const getUser = async () => {
    const userGet = await getUserAutenticate();
    setUser(userGet);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuth ? "Home" : "Index"}>
        {isAuth || user || userRedux ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Tips"
              component={Tips}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="RegisterEstablishment"
              component={RegisterEstablishment}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="RegisterBranch"
              component={RegisterBranch}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="BranchDetails"
              component={BranchDetails}
              options={{
                headerShown: false,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Index"
              component={Index}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RegisterUser"
              component={RegisterUser}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RegisterPerson"
              component={RegisterPerson}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ValidCode"
              component={ValidCode}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
