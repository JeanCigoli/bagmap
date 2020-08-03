import { combineReducers } from "redux";
import address from "./modules/address";
import modal from "./modules/modal";
import register from "./modules/register";
import auth from "./modules/auth";
import home from "./modules/home";
import roadmap from "./modules/roadmap";
import google from "./modules/google";
import branch from "./modules/branch";
import posts from "./modules/posts";
import placeroad from "./modules/placeroad";
import places from "./modules/places";

const rootReducer = combineReducers({
  address,
  modal,
  register,
  auth,
  home,
  roadmap,
  google,
  branch,
  posts,
  placeroad,
  places
});

export default rootReducer;
