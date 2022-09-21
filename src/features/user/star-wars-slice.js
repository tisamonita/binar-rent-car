import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import messageReducer, { setMessage } from '../auth/message-slice';
import starWarsAPI from './star-wars-API';

export const getAllPlanets = createAsyncThunk("planets/getAll", 
    async({page}, thunkAPI) => {
        try{
            const response = await starWarsAPI.getAllPlanets(page);
            thunkAPI.dispatch(setMessage('cars berhasil')); 
            return response.data;
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
    planets : null,
    films : null,
    visualisationData : [{
        data : [],
        label : [],
    }
    ]
}

const starWarsSlice = createSlice({
    name : "starWars",
    initialState,
    extraReducers : {
        [getAllPlanets.fulfilled] : (state, action) => {
            state.planets = action.payload;
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