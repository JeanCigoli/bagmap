import { requestData } from "..";
import { requestError } from "utils";
import { home, branch } from 'services/api';

const requestAddressData = requestData("@home");

export const sendClearHome = () => {
  return {
    type: "@home/CLEAR_HOME"
  };
};

export const sendClearTypePlace = () => {
  return {
    type: "@home/CLEAR_TYPE_PLACES"
  };
};

export const fetchTypePlace = () => async dispatch => {
  requestAddressData(
    dispatch,
    () => home.selectTypePlace(),
    payload => ({ type: "@home/TYPE_PLACES", payload })
  );
};


export const newSearch = (title, location, type) => async dispatch => {
  dispatch({ type: "@home/FETCHING_DATA" });

  try {
    const { data } = await home.selectPlaceType({
      place: title,
      lat: 0,
      lon: 0,
      type: type
    });

    const json = JSON.parse(data.payload);

    dispatch({ type: "@home/NEW_PLACE", payload: {
      title,
      items: json.results
    }});

  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@home/FETCHING_DATA_FINALLY" });
  }
};

export const newSearchBranch = (title, location, type, radius) => async dispatch => {
  dispatch({ type: "@home/FETCHING_DATA" });

  try {
    // const { data } = await home.selectBranchLocation({
    //   lat: location.latitude || 0,
    //   lng: location.longitude || 0,
    //   radius: radius || 0,
    //   type: type
    // });

    const { data } = await branch.selectAll({ page: 0, size: 20 });

    dispatch({ type: "@home/NEW_PLACE_BRANCH", payload: {
      title,
      items: data.payload.branch
    }});

  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@home/FETCHING_DATA_FINALLY" });
  }
};
