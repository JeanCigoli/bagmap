import produce from "immer";

const INITIAL_STATE = {
  fetching: false,
};

const placeroad = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@placeroad/INSERT_PLACEROAD":
        draft.placeroad = action.payload;
        break;
      case "@placeroad/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@placeroad/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@placeroad/CLEAR_PLACEROAD":
        draft.placeroad = undefined;
        draft.fetching = false;
        break;
      default:
        break;
    }
  });
};

export default placeroad;
