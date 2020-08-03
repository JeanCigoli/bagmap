import { address } from "../../../services/viacep";
import { city, state } from "../../../services/api";
import { requestData } from "..";
import cores from "../../../styles/cores";
import Toast from 'react-native-root-toast';

const requestAddressData = requestData("@address");

export const fetchAddressViaCep = zipCode => async dispatch => {

  dispatch({ type: "@address/FETCHING_DATA" });

  try {
    const { data } = await address.select(zipCode);
 
    dispatch({ type: "@address/FETCH_ADDRESS_VIACEP", payload: { zipCode, ...data } });
  } catch (error) {
    Toast.show("Endereço não encontrado", {
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

export const clearAddress = () => {
  return {
    type: "@address/CLEAR_ADDRESS"
  }
};

export const fetchStates = () => async dispatch => {
  requestAddressData(
    dispatch,
    () => state.select(),
    payload => ({ type: "@address/FETCH_STATES", payload })
  );
};

export const fetchCities = stateId => async dispatch => {
  requestAddressData(
    dispatch,
    () => city.selectAllByState(stateId),
    payload => ({ type: "@address/FETCH_CITIES", payload })
  );
};
