import produce from "immer";

const INITIAL_STATE = {
  data: [],
  dataBranch: [],
  fetching: false,
};

const home = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "@home/NEW_PLACE":
        draft.data = [...draft.data, {
          title: action.payload.title, items: action.payload.items
        }];
        break;
      case "@home/NEW_PLACE_BRANCH":
        draft.dataBranch = [...draft.dataBranch, {
          title: action.payload.title, items: action.payload.items
        }];
        break;
      case "@home/TYPE_PLACES":
        draft.typePlace = action.payload;
        break;
      case "@home/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@home/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@home/CLEAR_HOME":
        draft.data = [];
        draft.dataBranch = [];
        break;
      case "@home/CLEAR_TYPE_PLACES":
        draft.typePlace = undefined;
        break;
      default:
        break;
    }
  });
};

export default home;
