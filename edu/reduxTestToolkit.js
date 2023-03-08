

import {createSlice, configureStore} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:'',
    initialState:{isLoggedin:false},
    reducers:{
        logIn:(state)=>{
            state.isLoggedin = true;
        },
        logOut:(state)=>{
            state.isLoggedin = false
        }
    }
})

export const {logIn,logOut} = authSlice.actions;
export default authSlice.reducer;


// In store>index.js

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{counter:counterReducer, auth:authReducer}
})