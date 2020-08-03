import produce from "immer";

const INITIAL_STATE = { fetching: false };

const address = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {

    switch (action.type) {
      case "@address/FETCH_ADDRESS_VIACEP":
        draft.viacep = action.payload;
        break;
      case "@address/FETCH_STATES":
        draft.states = action.payload.states;
        break;
      case "@address/FETCH_CITIES":
        draft.cities = action.payload.cities;
        break;
      case "@address/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@address/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@address/CLEAR_ADDRESS":
        draft.fetching = false;
        draft.states = null;
        draft.cities = null;
        draft.viacep = null;
        break;
      default:
        return state;
    }
  });
};

export default address;
