import { produce } from "immer";

const INITIAL_STATE = { fetching: false };

const posts = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@posts/INSERT_POST":
        draft.post = action.payload;
        break;
      case "@posts/SELECT_POSTS":
        draft.posts = action.payload;
        break;
      case "@posts/SELECT_POSTS_PLUS":
        action.payload.content = [
          ...draft.posts.content,
          ...action.payload.content,
        ];
        draft.posts = action.payload;
        break;
      case "@posts/FETCHING_DATA":
        draft.fetching = true;
        break;
      case "@posts/FETCHING_DATA_FINALLY":
        draft.fetching = false;
        break;
      case "@posts/CLEAR_POSTS":
        draft.posts = undefined;
        draft.post = undefined;
        break;
      default:
        return state;
    }
  });
};

export default posts;
