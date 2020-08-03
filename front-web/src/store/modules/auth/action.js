import { TOKEN } from "config/constants";
import { auth } from "services/api";
import history from "services/history";
import { requestError } from "utils";
import { toast } from "react-toastify";
import { showModal } from "../modal/actions";

export const persistToken = (payload, dispatch) => {
  localStorage.setItem(TOKEN, payload.token);
  dispatch({ type: "@auth/AUTHENTICATE", payload });
};

export const authenticate = (credentials) => async dispatch => {
  dispatch({ type: "@auth/FETCHING_DATA"});

  try {
    const { data } = await auth.login(credentials);

    if(data.payload.user.namePerson){
      dispatch(() => persistToken(data.payload, dispatch));
    } else {
      toast.error("Usuário e senha não encontrados");
    }

  } catch (error) {
    if(error?.response?.status === 403) {
      dispatch(showModal("open", 3));
    } else {
      requestError(error);
    }
  } finally {
    dispatch({ type: "@auth/FETCHING_DATA_FINALLY"});
  }
};

export const authenticateGoogle = (credentials) => async dispatch => {
  dispatch({ type: "@auth/FETCHING_DATA"});

  try {
    const { data } = await auth.loginGoogle(credentials);
    dispatch(() => persistToken(data.payload, dispatch));

  } catch (error) {
    requestError(error);

    if(error?.response?.status === 404) {
      dispatch({ type: "@auth/ERROR_AUTH_GOOGLE" });
    }
  } finally {
    dispatch({ type: "@auth/FETCHING_DATA_FINALLY"});
  }
};

export const logout = () => async dispatch => {

  try {
    localStorage.clear();

    dispatch({ type: "@auth/SING_OUT" });
    toast.success("Você foi deslogado");
    history.push("/");

  } catch (error) {
    requestError(error);
  }
};

export const sendLocation = (location) => {
  return {
    type: "@auth/LOCATION",
    payload: location
  };
};

export const clearAuthGoogle = () => {
  return {
    type: "@auth/CLEAR_GOOGLE",
  };
};
