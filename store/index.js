import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Store storage State in localstorage
import storage from 'redux-persist/lib/storage';
// Store Redux in store in localStorage
import { persistReducer } from 'redux-persist';

import cart from './cartSlice';

const reducers = combineReducers({ cart });

// To save states in Localstorage
const config = {
  key: 'root',
  storage,
};

// To save Redux in Localstorage
const reducer = persistReducer(config, reducers);

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
