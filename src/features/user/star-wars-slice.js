import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { setMessage } from '../auth/message-slice';
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

export const getFilmById = createAsyncThunk("films/getById", 
    async({id}, thunkAPI) => {
        try{
            const response = await starWarsAPI.getFilmById(id);
            return response.data;
        }
        catch(err){
            const message = err.message.data || err.message || err.message.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// buat action untuk clear idFilms

//get All Films
//get Films by ID


const initialState= {
    planets : null,
    films : null,
    filmById : [],
}

const starWarsSlice = createSlice({
    name : "starWars",
    initialState,
    reducer : {
        //ubah idfilms jadi null
    },
    extraReducers : {
        [getAllPlanets.fulfilled] : (state, action) => {
            state.planets = action.payload;
        },
        [getAllPlanets.rejected] : (state, action) => {
            state.planets = null;
        },
        [getFilmById.fulfilled] : (state, action) => {
            state.filmById = action.payload;
        },
        [getFilmById.rejected] : (state, action) => {
            state.filmById = [];
        }
    },
});

const {reducer} = starWarsSlice;
export default reducer;



// jika mau ambil data planet dari suatu halaman
// import {}