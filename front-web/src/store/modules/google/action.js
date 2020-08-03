import { requestError } from "utils";
import { requestData } from "..";
import { google, road } from "services/api";

const requestAddressData = requestData("@google");

export const fetchDetailsGoogle = id => async dispatch => {
  requestAddressData(
    dispatch,
    () => google.selectDetails(id),
    payload => ({ type: "@google/DETAILS_GOOGLE", payload })
  );
};

export const fetchAllPlacesLocation = location => async dispatch => {
  requestAddressData(
    dispatch,
    () => road.selectPlaceByLocation({
      lat: location.latitude || 0,
      lng: location.longitude || 0,
      type: location.type,
      search: location.search
    }),
    payload => ({ type: "@google/PLACES_ALL", payload })
  );
};

export const clearGoogle = () => {
  return {
    type: "@google/CLEAR_GOOGLE"
  };
};

