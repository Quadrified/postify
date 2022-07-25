import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';

const middlewares = [thunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return { store };
};

export default configureStore;
