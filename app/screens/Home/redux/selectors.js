export const getHomePostData = state => {
  return state.HomePostsReducer.postData;
};

export const getCompleteAuthorData = state => {
  return state.HomePostsReducer?.userData[0];
};

export const getFilteredAuthorName = (state, authorID) => {
  const authorName = state.HomePostsReducer?.userData?.filter(
    user => user.id === authorID,
  )[0]?.username;
  return authorName;
};
