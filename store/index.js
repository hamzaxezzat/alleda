import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
// Store storage State in local storage
import storage from 'redux-persist/lib/storage';
// Store Redux in store in localStorage
import { persistReducer} from "redux-persist"

const reducers = combineReducers({});

const config = {
    key : "root",
    storage,
};

const reducer = persistReducer(config,reducers);

const store = configureStore({
    reducer: reducer,
    devTools : process.env.NODE_ENV !=="production",
    middleware: [thunk]
}); 

export default store