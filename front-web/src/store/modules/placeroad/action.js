import { showModal } from "../modal/actions";
import { placeroad } from "services/api";
import { requestError } from "utils";
import { toast } from "react-toastify";
import history from "services/history";


export const createPlacesRoad = (places) => async (dispatch) => {
    dispatch({ type: "@placeroad/FETCHING_DATA" });
  
    try {
      const { data } = await placeroad.insert(places);
  
      dispatch({ type: "@placeroad/INSERT_PLACEROAD", payload: data.payload });

      toast.success('Roteiro foi salvo com sucesso!');

      history.push('/rotas');
  
    } catch (error) {
      requestError(error);
    } finally {
      dispatch({ type: "@placeroad/FETCHING_DATA_FINALLY" });
    }
  };