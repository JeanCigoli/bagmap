import { places } from "services/api";
import { requestError } from "utils";


export const fetchPlaces = (title, page, size) => async dispatch => {
  dispatch({ type: "@home/FETCHING_DATA" });

  try {

    const { data } = await places.selectAll({ page, size });

    dispatch({ type: "@places/SELECT_PLACES", payload: {
      title,
      items: data.payload.places
    }});

  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@home/FETCHING_DATA_FINALLY" });
  }
};