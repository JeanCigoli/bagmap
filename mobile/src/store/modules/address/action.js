import { address } from '../../../services/api';
import Toast from 'react-native-root-toast';
import cores from '../../../styles/cores';

export const clearAddress = () => {
  return {
    type: "@address/CLEAR_ADDRESS",
  };
};


export const newSearchLocationByAddress = (street) => async (dispatch) => {
  dispatch({ type: "@address/FETCHING_DATA" });

  try {
    const { data } = await address.selectLocationByAddress(street);

    const json = JSON.parse(data.payload);

    dispatch({ type: "@address/SEND_ADDRESS_INICIAL", payload: json });
  } catch (error) {
    Toast.show("Ocorreu um erro ao procurar o endereço", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  } finally {
    dispatch({ type: "@address/FETCHING_DATA_FINALLY" });
  }
};
