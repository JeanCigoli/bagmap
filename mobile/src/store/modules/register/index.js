
const INITIAL_STATE = { fetching: false };

const payment = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@register/SEND_USER":
      state.user = action.payload;
      break;
    case "@register/FETCHING_DATA":
      state.fetching = !state.fetching;
      break;
    case "@register/FETCHING_DATA_FINALLY":
      state.fetching = !state.fetching;
      break;
    case "@register/SELECT_TYPE_PLACE":
      state.typePlace = action.payload;
      break;
    case "@register/CREATE_SUCCESS":
      state.create = { status: true, user: action.payload };
      break;
    case "@register/UPDATE_SUCCESS":
      state.update = { status: true, user: action.payload };
      break;
    case "@register/CLEAR_REGISTER":
      state.user = undefined;
      state.create = undefined;
      state.update = undefined;
      state.typePlace = undefined;
      break;
    default:
      return state;
  }

  return state;
};

export default payment;
