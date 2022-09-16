import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import messageReducer, { setMessage } from '../auth/message-slice';
import starWarsAPI from './star-wars-API';

export const getAllPlanets = createAsyncThunk("planets/getAll", 
    async(args, thunkAPI) => {
        try{
            const response = await starWarsAPI.getAllPlanets();
            thunkAPI.dispatch(setMessage('cars berhasil')); 
            return response
        }
        catch(err){
            const message = err.message.data || err.message || err.message.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

//get All Films
//get Films by ID


const initialState= {
    planets : null
}

const starWarsSlice = createSlice({
    name : "starWars",
    initialState,
    extraReducers : {
        [getAllPlanets.fulfilled] : (state, action) => {
            state.planets = action.payload.data;
        },
        [getAllPlanets.rejected] : (state, action) => {
            state.planets = null;
        }
    },
});

const {reducer} = starWarsSlice;
export default reducer;



// jika mau ambil data planet dari suatu halaman
// import {}