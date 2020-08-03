import { AsyncStorage } from "react-native"
import { TOKEN, FIRST_ACCESS, USER_AUTENTICATE } from "../config/constant"


export const getToken = async () => {

  const token = await AsyncStorage.getItem(TOKEN, (error, result) => {
    return result || null;
  });

  return token;
}

export const getFirstAccess = async () => {

  const token = await AsyncStorage.getItem(FIRST_ACCESS, (error, result) => {
    return JSON.parse(result) || null;
  });

  return token;
}


export const getUserAutenticate = async () => {

  const token = await AsyncStorage.getItem(USER_AUTENTICATE, (error, result) => {
    return JSON.parse(result) || null;
  });

  return token;
}