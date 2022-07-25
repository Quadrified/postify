import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import MainReducer from './reducer';

const appReducer = combineReducers({
  MainReducer,
  network,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
