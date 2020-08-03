import { establishment } from "../../../services/api";
import { requestData } from "..";
import Toast from 'react-native-root-toast';
import cores from '../../../styles/cores';

const requestAddressData = requestData("@establishment");

// export const fetchEstablishment = idUser => async dispatch => {
//   requestAddressData(
//     dispatch,
//     () => establishment.select(idUser),
//     payload => ({ type: "@establishment/SELECT_ESTABLISHMENT", payload })
//   );
// };

export const clearEstablishment = () => {
  return {
    type: "@establishment/CLEAR_REGISTER",
  };
};

export const fetchEstablishment = idUser => async dispatch => {
  dispatch({ type: "@establishment/FETCHING_DATA" });

  try {

    const { data, status } = await establishment.select(idUser);

    if (status === 200) {
      dispatch({ type: "@establishment/SELECT_ESTABLISHMENT", payload: data.payload });
    } else {
      dispatch({ type: "@establishment/FETCHING_DATA_ESTABLISH"});
    }
    
  } catch (error) {

    Toast.show("Ocorreu um erro ao buscar o estabelecimento", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });

  } finally {
    dispatch({ type: "@establishment/FETCHING_DATA_FINALLY" });
  }
};

export const newEstablishment = (dataEstablishment) => async dispatch => {
  dispatch({ type: "@establishment/FETCHING_DATA" });

  try {
    const { data } = await establishment.insert(dataEstablishment);

    dispatch({ type: "@establishment/CREATE_SUCCESS", payload: data.payload });

  } catch (error) {
    Toast.show("Ocorreu um erro ao cadastrar o estabelecimento", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  } finally {
    dispatch({ type: "@establishment/FETCHING_DATA_FINALLY" });
  }
};
