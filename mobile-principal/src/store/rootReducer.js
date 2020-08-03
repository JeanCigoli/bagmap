import { combineReducers } from "redux";
import address from "./modules/address/index";
import register from './modules/register/index';
import auth from './modules/auth';

const rootReducer = combineReducers({
  auth,
  address,
  register
});

export default rootReducer;