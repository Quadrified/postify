/** --------------------------
    All API endpoint URLs/paths
 --------------------------**/
const API_PATHS = {
  getPosts: 'posts?_limit=:limit&_embed=comments',
  getUser: 'users?id=:user_id',
};

export default {
  ...API_PATHS,
};
