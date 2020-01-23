import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import { persistStore, persistReducer } from 'redux-persist';
// defaults to localStorage for web
import storage from 'redux-persist/lib/storage';

import reducers from './reducers/index';

// TODO add your own persistables
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));
export const persistor = persistStore(store);
