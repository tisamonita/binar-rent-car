//reducer and action to call All authAPI in one file

//redux -> state management => react, vue, angular,
//redux-react -> 
// redux-thunk, redux-saga, 
//reduxjs/toolkit -> menyederhanakan, reducer dan action menjadi 1 slice, 
//memasukkan redux thunk kedalam 1 function, createAsyncThunk

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { setMessage } from './message-slice';
import authAPI from './authAPI';

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk("auth/register",
    async({email, password}, thunkAPI) => {
        try{
            const response = await authAPI.register(email, password);
            thunkAPI.dispatch(setMessage(response.data.message));
        }
        catch(err){
            const message = (
                err.response && err.response.data && err.response.data.message) ||
                err.message || err.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const login = createAsyncThunk("auth/login",
    async({email, password}, thunkAPI) => {
        try{
            const data = await authAPI.login(email, password);
            thunkAPI.dispatch(setMessage('berhasil login'));
            return {user : data};
        }
        catch(err){
            const message = (
                err.response && err.response.data && err.response.data.message) ||
                err.message || err.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async() => {
    await authAPI.logout();
});

const initialState = user ? {isLoggedIn : true, user} :
                    {isLoggedIn : false, user : null};

const authSlice = createSlice({
    name : "auth",
    initialState,
    extraReducers : {
        [register.fulfilled] : (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected] : (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled] : (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected] : (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled] : (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },

});

const {reducer} = authSlice;
export default reducer;