import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import messageReducer, { setMessage } from '../auth/message-slice';
import carsAPI from './carsAPI';

export const getAllCars = createAsyncThunk("cars/getAll", 
    async(args, thunkAPI) => {
        console.log(thunkAPI)
        try{
            const response = await carsAPI.getAllCars();
            thunkAPI.dispatch(setMessage('cars berhasil')); 
            console.log(response)
            return response
        }
        catch(err){
            const message = err.message.data || err.message || err.message.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

const initialState= {
    mobil : null
}

const carsSlice = createSlice({
    name : "cars",
    initialState,
    extraReducers : {
        [getAllCars.fulfilled] : (state, action) => {
            state.mobil = action.payload.data;
        },
        [getAllCars.rejected] : (state, action) => {
            state.mobil = null;
        }
    },
});

const {reducer} = carsSlice;
export default reducer;