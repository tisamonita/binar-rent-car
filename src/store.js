import {configureStore} from '@reduxjs/toolkit';
import balanceReducer from './features/balance/balanceSlice';
import authReducer from './features/auth/auth-slice';
import messageReducer from './features/auth/message-slice';
import carsReducer from './features/user/cars-slice';
import starWarsReducer from './features/user/star-wars-slice';

export default configureStore({
    reducer :{
       balance : balanceReducer,
       auth : authReducer,
       message : messageReducer,
       cars : carsReducer,
       starWars : starWarsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
    devTools : true,
});


// Redux dengan 'redux'
//  Membuat Action, Reducer, store dalam folder terpisah

//Redux toolkit : menggabungkan dalam file slice

