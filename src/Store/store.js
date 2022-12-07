import { configureStore } from "@reduxjs/toolkit";
import { authSlice, listenToAuthenticationChanges } from "./slices/authSlice";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../Config/firebaseConfig"
import {googleBooksApi} from "./api/apiSlice";
const firebaseApp = initializeApp(firebaseConfig);

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [googleBooksApi.reducerPath]: googleBooksApi.reducer, // api reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([googleBooksApi.middleware])
/*middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          firebaseApp,
        },
      },
    }),*/
});

store.dispatch(listenToAuthenticationChanges());

//enablePersistence(store, firebaseApp);

export default store;