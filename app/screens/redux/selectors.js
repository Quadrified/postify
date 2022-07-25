export const getHomePostData = state => {
  return state.MainReducer.postData;
};

export const getCompleteAuthorData = state => {
  return state.MainReducer?.userData[0];
};

export const getFilteredAuthorName = (state, authorID) => {
  const authorName = state.MainReducer?.userData?.filter(
    user => user.id === authorID,
  )[0]?.username;
  return authorName;
};

export const getSearchData = state => {
  return state.MainReducer.searchData;
};
