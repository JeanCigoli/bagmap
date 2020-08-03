import { branch } from "../../../services/api";
import { requestData } from "..";
import Toast from 'react-native-root-toast';
import cores from '../../../styles/cores';

const requestAddressData = requestData("@branch");

export const clearBranch = () => {
  return {
    type: "@branch/CLEAR_REGISTER",
  };
};

export const fetchBranch = idEstablishment => async dispatch => {
  requestAddressData(
    dispatch,
    () => branch.select(idEstablishment),
    payload => ({ type: "@branch/SELECT_BRANCH", payload })
  );
};

export const newBranch = (dataBranch) => async dispatch => {
  dispatch({ type: "@branch/FETCHING_DATA" });

  try {
    const { data } = await branch.insert(dataBranch);

    dispatch({ type: "@branch/CREATE_SUCCESS" });

  } catch (error) {
    Toast.show("Ocorreu um erro ao cadastrar a filial", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  } finally {
    dispatch({ type: "@branch/FETCHING_DATA_FINALLY" });
  }
};
