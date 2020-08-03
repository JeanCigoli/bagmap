import { produce } from "immer";

const INITIAL_STATE = { fetching: false };

const register = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {

    switch (action.type) {
      case "@register/SEND_ADDRESS":
        draft.address = action.payload;
        break;
      case "@register/SEND_PERSON":
        draft.person = action.payload;
        break;
      case "@register/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@register/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@register/CLEAR_REGISTER":
        draft.address = null;
        draft.person = null;
        break;
      default:
        return state;
    }
  });
};

export default register;
