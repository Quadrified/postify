import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import HomePostsReducer from './screens/Home/redux/reducer';

const appReducer = combineReducers({
  HomePostsReducer,
  network,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
