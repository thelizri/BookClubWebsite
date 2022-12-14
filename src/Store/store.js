import { configureStore } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Config/firebaseConfig";
import { persistence } from "./persistence/firebase";
import { googleBooksApi } from "./slices/apiSlice";
import { book } from "./slices/bookSlice";
import { club } from "./slices/clubSlice";
import { meeting } from "./slices/meetingSlice";
import { listenToAuthenticationChanges, user } from "./slices/userSlice";

export const firebaseApp = initializeApp( firebaseConfig );

const store = configureStore( {
    reducer : {
        auth : user.reducer,
        book : book.reducer,
        club : club.reducer,
        meeting : meeting.reducer,
        [ googleBooksApi.reducerPath ] : googleBooksApi.reducer, // api reducer,
    },
    middleware : ( getDefaultMiddleware ) =>
        getDefaultMiddleware().concat( [ googleBooksApi.middleware ] )
} );

store.dispatch( listenToAuthenticationChanges() );

persistence( store, firebaseApp );

export default store;