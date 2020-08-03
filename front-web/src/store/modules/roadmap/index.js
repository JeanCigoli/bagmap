import { produce } from "immer";

const INITIAL_STATE = { fetching: false };

const roadMap = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@roadmap/SEND_ADDRESS_INICIAL":
        draft.address = action.payload;
        break;
      case "@roadmap/SEND_DIRECTION":
        draft.direction = action.payload;
        break;
      case "@roadmap/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@roadmap/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@roadmap/FETCH_ROADMAP":
        draft.roadMapsAll = action.payload;
        break;
      case "@roadmap/FETCH_PLACES_ROADMAP":
        draft.placesRoad = action.payload;
        break;
      case "@roadmap/CLEAR_ROAD":
        draft.fetching = false;
        draft.address = undefined;
        draft.direction = undefined;
        draft.roadMap = undefined;
        break;
      case "@roadmap/CLEAR_ROAD_DISTANCE":
        draft.fetching = false;
        draft.direction = undefined;
        break;
      case "@roadmap/CLEAR_ALL":
        draft.placesRoad = undefined;
        break;
      case "@roadmap/CLEAR_ROAD_NAV":
        draft.fetching = false;
        draft.placesRoad = undefined;
        break;
      case "@roadmap/SUCCESS_ROADMAP":
        draft.roadMap = action.payload;
        break;

      default:
        return state;
    }
  });
};

export default roadMap;
