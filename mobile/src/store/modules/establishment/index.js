const INITIAL_STATE = { fetching: false };

const establishment = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@establishment/FETCHING_DATA":
      state.fetching = !state.fetching;
      break;
    case "@establishment/FETCHING_DATA_FINALLY":
      state.fetching = !state.fetching;
      break;
    case "@establishment/FETCHING_DATA_ESTABLISH":
      state.dataFetching = true;
      break;
    case "@establishment/SELECT_ESTABLISHMENT":
      state.data = action.payload;
      break;
    case "@establishment/CREATE_SUCCESS":
      state.dataFetching = undefined;
      state.create = { status: true, establishment: action.payload };
      break;
    case "@establishment/CLEAR_REGISTER":
      state.fetching = false;
      state.create = undefined;
      break;
    default:
      return state;
  }

  return state;
};

export default establishment;
