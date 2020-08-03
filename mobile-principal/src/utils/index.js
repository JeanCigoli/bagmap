import { AsyncStorage } from "react-native"
import { TOKEN, FIRST_ACCESS, DATA_USER } from "../config/constant"


export const getToken = async () => {

  const token = await AsyncStorage.getItem(TOKEN, (error, result) => {
    return result || null;
  });

  return token; 
}

export const formatArrayToPicker = array => {
  const formatArray = [];

  array.forEach(element => {
    //.push = adiona um novo elemento no array(ex: string, number...)
    formatArray.push({
      value: element.id,
      label: element.name,
    });
  });

  return formatArray;
}

export const getFirstAccess = async () => {
  
  const token = await AsyncStorage.getItem(FIRST_ACCESS, (error, result) => {
    return JSON.parse(result) || null;
  });

  return token;

}

export const getDataUser = async () => {
  
  const data = await AsyncStorage.getItem(DATA_USER, (error, result) => {
    return JSON.parse(result) || null;
  });

  return data;

}