import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_USER_DATA,
  FETCH_USER_DATA_ERROR,
} from './types';

const initialState = {
  postData: [],
  userData: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        postData: action.payload,
      };
    }
    case FETCH_POSTS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case FETCH_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case FETCH_USER_DATA_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
