import produce from "immer";

export const INITIAL_STATE = { isShowing: [] };

const modal = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case "@modal/SHOW_MODAL":
        if (action.payload.data === "close") {
          draft.isShowing = draft.isShowing.filter(mod => mod.id !== action.payload.id);

          if(action.payload.id === 51) {
            draft.distanceModal = undefined;
          }
        } else {
          draft.isShowing.push({ data: true, id: action.payload.id });

          if(action.payload.id === 51) {
            draft.distanceModal = true;
          }
        }
        break;
      default:
        return state;
    }
  });
};

export default modal;
