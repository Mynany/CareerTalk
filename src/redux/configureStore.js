import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // save store on disk
import thunk from 'redux-thunk';

import user from './modules/user';

const middlewares = [thunk];

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = persistCombineReducers(persistConfig, {
  user,
});

const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
