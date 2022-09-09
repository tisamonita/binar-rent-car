import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import reducer from '../auth/message-slice';
import carsAPI from './carsAPI';

export const getAllCars = createAsyncThunk("cars/getAll", 
    async(thunkAPI) => {
        try{
            const response = await carsAPI.getAllCars();
            return response
        }
        catch(err){
            const message = err.response.data || err.response || err.toString();
            return message;
        }
    }
);

const initialState= {
    cars : null
}

const carsSlice = createSlice({
    name : "cars",
    initialState,
    extraReducers : {
        [getAllCars.fulfilled] : (state, action) => {
            state.cars = action.payload.data;
        },
        [getAllCars.rejected] : (state, action) => {
            state.cars = null;
        }
    },
});

console.log(carsSlice, 'slice');
const {reducer} = carsSlice;
export default reducer;