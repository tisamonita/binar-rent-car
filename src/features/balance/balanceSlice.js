import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    total : 0
};

const balanceSlice = createSlice({
    name : 'balance',
    initialState,
    reducers : {
        deposit(state, action){
            return{
                ...state,
                total : state.total + action.payload
            }
        },
        withdraw(state, action){
            return{
                ...state,
               total : state.total - action.payload
            }
        },
    },
    extraReducers: {
        // add your async reducers here
    }
});

export const {deposit, withdraw} = balanceSlice.actions;
export default balanceSlice.reducer;

