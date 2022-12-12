import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { googleBooksApi } from "./api/apiSlice";
import { authSlice, listenToAuthenticationChanges } from "./slices/authSlice";
import { userInfo } from "./slices/userInfo";

const store = configureStore( {
    reducer : {
        auth : authSlice.reducer,
        [ googleBooksApi.reducerPath ] : googleBooksApi.reducer, // api reducer,
    },
    middleware : ( getDefaultMiddleware ) =>
        getDefaultMiddleware().concat( [ googleBooksApi.middleware ] )
} );

store.dispatch( listenToAuthenticationChanges() );

//enablePersistence(store, firebaseApp);

export default store;