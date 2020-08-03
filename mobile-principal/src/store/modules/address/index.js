import { formatArrayToPicker } from '../../../utils';

const INITIAL_STATE = { fetching: false };

const address = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "@address/FETCH_ADDRESS_VIACEP":
      state.viacep = action.payload;
      break;
    case "@address/ADDRESS_FORM":
      state.address = action.payload;
      break;
    case "@address/FETCH_STATES":
      state.states = formatArrayToPicker(action.payload.states);
      break;
    case "@address/FETCH_CITIES":
      state.cities = formatArrayToPicker(action.payload.cities);
      break;
    case "@address/FETCHING_DATA":
      state.fetching = !state.fetching;
      break; 
    case "@address/FETCHING_DATA_FINALLY":
      state.fetching = !state.fetching;
      break;
    case "@address/CLEAR_ADDRESS":
      state.fetching = false;
      state.states = undefined;
      state.cities = undefined;
      state.viacep = undefined;
      break;
    default:
      return state;
  }

  return state;

};

export default address;