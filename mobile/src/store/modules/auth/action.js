import Toast from 'react-native-root-toast';
import cores from '../../../styles/cores';
import { auth } from "../../../services/api";
import { AsyncStorage } from 'react-native';
import { TOKEN, USER_AUTENTICATE } from "../../../config/constant";
import { jsonUserFormat } from '../../../utils/jsonFormat';
import { clearEstablishment } from '../establishment/action';
import { clearBranch } from '../branch/action';
import { clearRegister } from '../register/action';

export const persistToken = async (payload, dispatch) => {
  await AsyncStorage.setItem(TOKEN, payload.token);
  await AsyncStorage.setItem(USER_AUTENTICATE, JSON.stringify(jsonUserFormat(payload.user)));
  dispatch({ type: "@auth/AUTHENTICATE", payload });
};

export const logout = () => async dispatch => {

  try {
    await AsyncStorage.removeItem(TOKEN);
    await AsyncStorage.removeItem(USER_AUTENTICATE);

    dispatch({ type: "@auth/SING_OUT" });

    dispatch(clearEstablishment());
    dispatch(clearBranch());
    dispatch(clearRegister());

    Toast.show("Deslogado com sucesso", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.green,
    });

  } catch (error) {
    Toast.show("Ocorreu um erro ao sair", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  }
};

export const authenticate = (credentials) => async dispatch => {
  dispatch({ type: "@auth/FETCHING_DATA" });

  try {
    const { data } = await auth.login(credentials);

    if (data.payload.user?.nameUserEstablishment) {
      dispatch(() => persistToken(data.payload, dispatch));
    } else {
      Toast.show("Usuário ou senha não encontrados", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 1,
        backgroundColor: cores.red,
      });
    }

  } catch (error) {
    Toast.show("Usuário ou senha não encontrados", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  } finally {
    dispatch({ type: "@auth/FETCHING_DATA_FINALLY" });
  }
};