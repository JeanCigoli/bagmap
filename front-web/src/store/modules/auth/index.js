import produce from "immer";
import { jsonUserFormat } from 'utils/json';

const INITIAL_STATE = {
  fetching: false,
  signed: false,
  user: {},
  location: {}
};

const auth = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/AUTHENTICATE":
        draft.user = jsonUserFormat(action.payload.user);
        draft.signed = true;
        break;
      case "@auth/LOCATION":
        draft.location = action.payload;
        break;
      case "@auth/SING_OUT":
        draft.signed = false;
        draft.user = {};
        break;
      case "@auth/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@auth/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@auth/CLEAR_GOOGLE":
        delete draft.errorGoogle;
        break;
      case "@auth/ERROR_AUTH_GOOGLE":
        draft.signed = false;
        draft.user = {};
        draft.errorGoogle = true;
        break;
      default:
        break;
    }
  });
};

export default auth;
