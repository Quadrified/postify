import { api as API } from '../../services/Api';
import Paths from '../../services/Paths';

export const getPostsController = limit => {
  return new Promise((resolve, reject) => {
    let path = Paths.getPosts;
    path = path.replace(':limit', limit);
    API.get(path)
      .then(response => {
        if (response.ok) {
          resolve(response);
        }
      })
      .catch(error => {
        console.log('>>>error in getPostController<<<', error);
        reject(error);
      });
  });
};

export const getUserDataController = userID => {
  return new Promise((resolve, reject) => {
    let path = Paths.getUser;
    path = path.replace(':user_id', userID);
    API.get(path)
      .then(response => {
        if (response.ok) {
          resolve(response);
        }
      })
      .catch(error => {
        console.log('>>>error in getUserDataController<<<', error);
        reject(error);
      });
  });
};
