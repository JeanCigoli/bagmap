import { address } from "services/viacep";
import { requestError } from "utils";
import { requestData } from "..";
import { city, state } from "services/api";

const requestAddressData = requestData("@address");

export const fetchAddressViaCep = zipCode => async dispatch => {

  dispatch({ type: "@address/FETCHING_DATA"});

  try {
    const { data } = await address.select(zipCode);

    dispatch({ type: "@address/FETCH_ADDRESS_VIACEP", payload: { zipCode, ...data } });
  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@address/FETCHING_DATA_FINALLY"});
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

export const clearAddress = () => {
  return {
    type: "@address/CLEAR_ADDRESS",
  };
};
