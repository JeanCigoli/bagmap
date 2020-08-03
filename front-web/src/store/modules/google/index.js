import produce from "immer";

const INITIAL_STATE = {
  fetching: false,
};

const google = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "@google/DETAILS_GOOGLE":
        draft.details = action.payload;
        break;
      case "@google/PLACES_ALL":
        draft.places = action.payload;
        break;
      case "@google/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@google/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@google/CLEAR_GOOGLE":
        draft.details = undefined;
        break;
      default:
        break;
    }
  });
};

export default google;
