// import _ from 'lodash';
// import moment from 'moment';
// import { generateRandomTimeStamp } from '../../../utils/helpers';

export const getHomePostData = state => {
  // const randomTimeStamp = generateRandomTimeStamp();
  return state.HomePostsReducer.postData;
};

export const getCompleteAuthorData = state => {
  // const randomTimeStamp = generateRandomTimeStamp();
  return state.HomePostsReducer?.userData;
};

export const getFilteredAuthorName = (state, authorID) => {
  const authorName = state.HomePostsReducer?.userData.filter(
    user => user.id === authorID,
  )[0].username;
  return authorName;
};
