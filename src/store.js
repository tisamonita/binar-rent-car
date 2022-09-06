import {configureStore} from '@reduxjs/toolkit';
import balanceReducer from './features/balance/balanceSlice';
import authReducer from './features/auth/auth-slice';
import messageReducer from './features/auth/message-slice';


export default configureStore({
    reducer :{
       balance : balanceReducer,
       auth : authReducer,
       message : messageReducer,
    },
    devTools : true,
});


// Redux dengan 'redux'
//  Membuat Action, Reducer, store dalam folder terpisah

//Redux toolkit : menggabungkan dalam file slice

