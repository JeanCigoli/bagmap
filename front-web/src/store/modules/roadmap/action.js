import { requestData } from "..";
import { requestError } from "utils";
import { address, roadMap } from "services/api";
import { toast } from "react-toastify";
import { showModal } from "../modal/actions";

const requestAddressData = requestData("@roadmap");

export const clearRoadMap = () => {
  return {
    type: "@roadmap/CLEAR_ROAD",
  };
};

export const clearRoadMapNav = () => {
  return {
    type: "@roadmap/CLEAR_ROAD_NAV",
  };
};

export const clearRoadMapDistance = () => {
  return {
    type: "@roadmap/CLEAR_ROAD_DISTANCE",
  };
};

export const clearAllRoad = () => {
  return {
    type: "@roadmap/CLEAR_ALL",
  }
}

export const sendRoadMap = data => {
  return {
    type: "@roadmap/SUCCESS_ROADMAP",
    payload: data,
  };
};

export const createRoadMap = (roadMapData) => async (dispatch) => {
  dispatch({ type: "@roadmap/FETCHING_DATA" });

  try {
    const { data } = await roadMap.insert(roadMapData);

    dispatch(showModal("open", 21));
    dispatch(clearAllRoad());

    dispatch({ type: "@roadmap/SUCCESS_ROADMAP", payload: data.payload });

  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@roadmap/FETCHING_DATA_FINALLY" });
  }
};

export const fetchRoadByUser = (id) => async dispatch => {
  requestAddressData(
    dispatch,
    () => roadMap.selectByUser(id),
    payload => ({ type: "@roadmap/FETCH_ROADMAP", payload }) 
  );
};

export const fetchPlacesByRoad = (id) => async dispatch => {
  requestAddressData(
    dispatch,
    () => roadMap.selectPlacesByRoad(id),
    payload => ({ type: "@roadmap/FETCH_PLACES_ROADMAP", payload }) 
  );
};

export const newSearchLocationByAddress = (street) => async (dispatch) => {
  dispatch({ type: "@roadmap/FETCHING_DATA" });

  try {
    const { data } = await address.selectLocationByAddress(street);

    const json = JSON.parse(data.payload);

    dispatch({ type: "@roadmap/SEND_ADDRESS_INICIAL", payload: json });
  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@roadmap/FETCHING_DATA_FINALLY" });
  }
};

export const newSearchDirection = (location) => async (dispatch) => {
  dispatch({ type: "@roadmap/FETCHING_DATA" });

  try {
    const { data } = await address.selectDirection(location);

    dispatch({ type: "@roadmap/SEND_DIRECTION", payload: data.payload });
  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@roadmap/FETCHING_DATA_FINALLY" });
  }
};
