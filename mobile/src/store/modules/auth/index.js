import { jsonUserFormat } from '../../../utils/jsonFormat';

const INITIAL_STATE = {
  fetching: false,
  signed: false,
  user: null,
};

const auth = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "@auth/AUTHENTICATE":
      state.user = jsonUserFormat(action.payload.user);
      break;
    case "@auth/SING_OUT":
      state.signed = true;
      state.user = undefined;
      break;
    case "@auth/FETCHING_DATA":
      state.fetching = !state.fetching;
      break;
    case "@auth/FETCHING_DATA_FINALLY":
      state.fetching = !state.fetching;
      break;
    default:
      break;
  }

  return state;

};

export default auth;