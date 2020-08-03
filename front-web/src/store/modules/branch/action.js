import { requestError } from "utils";
import { requestData } from "..";
import { branch } from "services/api";

const requestAddressData = requestData("@branch");

export const fetchDetailsBranch = id => async dispatch => {
  requestAddressData(
    dispatch,
    () => branch.selectDetails(id),
    payload => ({ type: "@branch/DETAILS_BRANCH", payload })
  );
};

export const clearBranch = () => {
  return {
    type: "@branch/CLEAR_BRANCH"
  };
};
