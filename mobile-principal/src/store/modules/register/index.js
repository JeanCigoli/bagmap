const INITIAL_STATE = { fetching: false };

const address = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "@register/ADDRESS_FORM":
      state.address = action.payload;
      break;
      case "@register/PERSON_FORM":
      state.person = action.payload;
      break;
    case "@register/FETCHING_DATA":
      state.fetching = !state.fetching;
      break; 

    case "@register/FETCHING_DATA_FINALLY":
      state.fetching = !state.fetching;
      break;

    case "@register/REGISTRATION_SUCCESSFULL":
    state.success = true;
    break;

    case "@register/CLEAR_REGISTER":
      state.fetching = false;
      state.address = undefined;
      state.person = undefined;
      break;
    default:
      return state;
  }

  return state;

};

export default address;