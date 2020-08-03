import { requestData } from "..";
import { requestError } from "utils";
import { posts } from "services/api";

const requestAddressData = requestData("@posts");

export const clearPosts = () => {
  return {
    type: "@posts/CLEAR_POSTS",
  };
};

export const fetchPosts = (page, size) => async dispatch => {
  requestAddressData(
    dispatch,
    () => posts.select({ page, size }),
    payload => ({ type: "@posts/SELECT_POSTS", payload })
  );
};

export const fetchPostsPlus = (page, size) => async dispatch => {
  requestAddressData(
    dispatch,
    () => posts.select({ page, size }),
    payload => ({ type: "@posts/SELECT_POSTS_PLUS", payload })
  );
};

export const insertPost = (post) => async (dispatch) => {
  dispatch({ type: "@posts/FETCHING_DATA" });

  try {
    const { data } = await posts.insert(post);

    dispatch({ type: "@posts/INSERT_POST", payload: data.payload });

  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: "@posts/FETCHING_DATA_FINALLY" });
  }
};
