import { requestError } from "../../utils";

export const requestData = moduleName => async (
  dispatch,
  requestFunction,
  action
) => {
  dispatch({ type: `${moduleName}/FETCHING_DATA` });
  try {
    const { data } = await requestFunction();
    dispatch(action(data.payload));
  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: `${moduleName}/FETCHING_DATA_FINALLY` });
  }
};
