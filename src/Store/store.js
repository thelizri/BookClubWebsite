import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { googleBooksApi } from "./api/apiSlice";
import { userSlice, listenToAuthenticationChanges } from "./slices/userSlice";
import { book } from "./slices/bookSlice";
import { meeting } from "./slices/meetingSlice";
import { club } from "./slices/club";
import { persistClubs } from "./persist/firebase";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../Config/firebaseConfig";
export const firebaseApp = initializeApp( firebaseConfig );

const store = configureStore( {
    reducer : {
        auth : userSlice.reducer,
        book : book.reducer,
        club : club.reducer,
        meeting : meeting.reducer,
        [ googleBooksApi.reducerPath ] : googleBooksApi.reducer, // api reducer,
    },
    middleware : ( getDefaultMiddleware ) =>
        getDefaultMiddleware().concat( [ googleBooksApi.middleware ] )
} );

store.dispatch( listenToAuthenticationChanges() );

//persistClubs(store, firebaseApp);

export default store;