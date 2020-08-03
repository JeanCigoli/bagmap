const INITIAL_STATE = { fetching: false };

const branch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@branch/FETCHING_DATA":
      state.fetching = !state.fetching;
      break;
    case "@branch/FETCHING_DATA_FINALLY":
      state.fetching = !state.fetching;
      break;
    case "@branch/SELECT_BRANCH":
      state.data = action.payload;
      break;
    case "@branch/CREATE_SUCCESS":
      state.create = { status: true };
      break;
    case "@branch/CLEAR_REGISTER":
      state.data = undefined;
      state.fetching = false;
      state.create = undefined;
      break;
    default:
      return state;
  }

  return state;
};

export default branch;
