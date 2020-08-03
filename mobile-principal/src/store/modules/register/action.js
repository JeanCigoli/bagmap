import { person } from "../../../services/api";
import cores from "../../../styles/cores";
import Toast from 'react-native-root-toast';

export const sendAddressForm = (address) => {
  return {
    type: "@register/ADDRESS_FORM",
    payload: address
  }
}

export const sendPersonForm = (person) => {
  return {
    type: "@register/PERSON_FORM",
    payload: person
  }
}

export const clearRegister = () => {
  return {
    type: "@register/CLEAR_REGISTER"
  }
}

export const sendAllForms = dataFormat => async dispatch => {
// iniciando contato com api
  dispatch({type: "@register/FETCHING_DATA"});
  
  try {
    const { data } = await person.insert(dataFormat);

    dispatch({ type:"@register/REGISTRATION_SUCCESSFULL"});

  } catch (error) {
    Toast.show("Erro ao casdastrar", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  } finally {
    dispatch({ type: "@register/FETCHING_DATA_FINALLY"});
  }

};