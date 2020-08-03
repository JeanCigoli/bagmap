import { produce } from "immer";

const INITIAL_STATE = { fetching: false, data: [] };

const places = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@places/SELECT_PLACES":
        draft.data = [...draft.data, {
          title: action.payload.title, items: action.payload.items
        }];
        break;
      case "@places/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@places/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@places/CLEAR_PLACES":
        draft.places = undefined;
        break;
      default:
        return state;
    }
  });
};

export default places;
