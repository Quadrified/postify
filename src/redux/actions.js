import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_USER_DATA,
  FETCH_USER_DATA_ERROR,
  FETCH_SEARCH_RESULT,
  FETCH_SEARCH_RESULT_ERROR,
  CLEAR_SEARCH_RESULT,
} from './types';
import {
  getPostsController,
  getSearchDataController,
  getUserDataController,
} from './controller';

export const fetchPostData = data => ({
  type: FETCH_POSTS,
  payload: data,
});

export const postDataError = error => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
});

export const fetchUserData = data => ({
  type: FETCH_USER_DATA,
  payload: data,
});

export const userDataError = error => ({
  type: FETCH_USER_DATA_ERROR,
  payload: error,
});

export const clearSearchResult = () => ({
  type: CLEAR_SEARCH_RESULT,
  payload: [],
});

export const fetchResultData = data => ({
  type: FETCH_SEARCH_RESULT,
  payload: data,
});

export const resultDataError = error => ({
  type: FETCH_SEARCH_RESULT_ERROR,
  payload: error,
});

export const getPostData = limit => {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      const response = await getPostsController(limit);
      if (response.ok) {
        dispatch(fetchPostData(response.data));
        resolve(response);
      } else {
        dispatch(postDataError(response.originalError.message));
        reject(response.originalError.message);
      }
    });
  };
};

export const getUserData = userID => {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      const response = await getUserDataController(userID);
      if (response.ok) {
        dispatch(fetchUserData(response.data));
        resolve(response);
      } else {
        dispatch(userDataError(response.originalError.message));
        reject(response.originalError.message);
      }
    });
  };
};

export const fetchSearchData = searchQuery => {
  return dispatch => {
    return new Promise(async (resolve, reject) => {
      const response = await getSearchDataController(searchQuery);
      if (response.ok) {
        dispatch(fetchResultData(response.data));
        resolve(response);
      } else {
        dispatch(resultDataError(response.originalError.message));
        reject(response.originalError.message);
      }
    });
  };
};
