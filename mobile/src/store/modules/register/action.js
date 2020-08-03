import { register } from "../../../services/api";
import Toast from 'react-native-root-toast';
import cores from '../../../styles/cores';
import { requestData } from "..";

const requestAddressData = requestData("@register");

export const sendUser = (user) => {
  return {
    type: "@register/SEND_USER",
    payload: user,
  };
};

export const clearRegister = () => {
  return {
    type: "@register/CLEAR_REGISTER",
  };
};

export const fetchTypePlace = () => async dispatch => {
  requestAddressData(
    dispatch,
    () => register.selectTypePlace(),
    payload => ({ type: "@register/SELECT_TYPE_PLACE", payload })
  );
};

export const newPerson = (userData) => async dispatch => {
  dispatch({ type: "@register/FETCHING_DATA" });

  try {
    const { data } = await register.insert(userData);

    dispatch({ type: "@register/CREATE_SUCCESS", payload: data.payload });

  } catch (error) {
    Toast.show("Ocorreu um erro ao cadastrar o usuário", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  } finally {
    dispatch({ type: "@register/FETCHING_DATA_FINALLY" });
  }
};

export const verifyEmail = (email) => async dispatch => {
  dispatch({ type: "@register/FETCHING_DATA" });

  try {
    const data = await register.validEmail(email);

    if (data.status === 204) {
      Toast.show('O e-mail está disponível para cadastro', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 1,
        backgroundColor: cores.green,
      });
    } else {
      Toast.show('O e-mail já se encontra cadastrado', {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 1,
        backgroundColor: cores.red,
      });
    }

  } catch (error) {
    Toast.show("Ocorreu um erro ao verificar se o e-mail existe", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });

  } finally {
    dispatch({ type: "@register/FETCHING_DATA_FINALLY" });
  }
};

export const updateValidEmail = code => async dispatch => {
  dispatch({ type: "@register/FETCHING_DATA" });

  try {

    const { data } = await register.validCode(code);

    dispatch({ type: "@register/UPDATE_SUCCESS", payload: data.payload });

  } catch (error) {

    Toast.show("Ocorreu um erro ao verificar o código", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });

  } finally {
    dispatch({ type: "@register/FETCHING_DATA_FINALLY" });
  }
};