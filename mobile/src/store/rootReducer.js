import { combineReducers } from "redux";
import register from "./modules/register";
import auth from "./modules/auth";
import establishment from "./modules/establishment";
import address from "./modules/address";
import branch from "./modules/branch";

const rootReducer = combineReducers({
  register,
  auth,
  establishment,
  address,
  branch
});

export default rootReducer;