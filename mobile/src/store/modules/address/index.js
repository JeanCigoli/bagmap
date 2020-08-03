const INITIAL_STATE = {
  fetching: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@address/SEND_ADDRESS_INICIAL":
      state.address = action.payload;
      break;
    case "@address/FETCHING_DATA":
      state.fetching = !state.fetching;
      break;
    case "@address/FETCHING_DATA_FINALLY":
      state.fetching = !state.fetching;
      break;
    case "@address/CLEAR_ADDRESS":
      state.address = undefined;
      break;
    default:
      break;
  }

  return state;
};

export default auth;
