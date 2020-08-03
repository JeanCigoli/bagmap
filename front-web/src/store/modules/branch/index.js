import produce from "immer";

const INITIAL_STATE = {
  fetching: false,
};

const branch = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "@branch/DETAILS_BRANCH":
        draft.details = action.payload;
        break;
      case "@branch/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@branch/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@branch/CLEAR_BRANCH":
        draft.details = undefined;
        break;
      default:
        break;
    }
  });
};

export default branch;
