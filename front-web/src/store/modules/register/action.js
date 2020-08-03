import { requestData } from "..";
import { requestError } from "utils";
import { person } from 'services/api';
import { showModal } from '../modal/actions';
import { toast } from "react-toastify";

const requestAddressData = requestData("@register");

export const sendAddress = (address) => {
  return {
    type: "@register/SEND_ADDRESS",
    payload: address
  };
};

export const sendPerson = (person) => {
  return {
    type: "@register/SEND_PERSON",
    payload: person
  };
};

export const clearRegister = () => {
  return {
    type: "@register/CLEAR_REGISTER",
  };
};

export const newPerson = (clientData, handleContainer) => async dispatch => {
  dispatch({ type: "@register/FETCHING_DATA" });

  try {
    const { data } = await person.insert(clientData);

    if(data.payload.authorization) {
      handleContainer({ name: undefined});
      dispatch(showModal("open", 12));
    } else {
      handleContainer({ name: data.payload.email });
      dispatch(showModal("open", 2));
    }

  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@register/FETCHING_DATA_FINALLY" });
  }
};

export const updateValidEmail = (token) => async dispatch => {
  dispatch({ type: "@register/FETCHING_DATA" });

  try {
    const { status } = await person.updateEmail(token);

    if(status === 200) {
      dispatch(showModal("open", 10));
    }

  } catch (error) {
    dispatch(showModal("open", 11));
  } finally {
    dispatch({ type: "@register/FETCHING_DATA_FINALLY" });
  }
};

export const verifyEmail = (email) => async dispatch => {
  dispatch({ type: "@register/FETCHING_DATA" });

  try {
    const data = await person.selectByEmail(email);

    if (data.status === 204) {
      toast.success("O e-mail está disponível para cadastro");
    } else {
      toast.error("O e-mail já está cadastrado");
    }

  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@register/FETCHING_DATA_FINALLY" });
  }
};
