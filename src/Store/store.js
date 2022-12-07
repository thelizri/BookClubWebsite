import { configureStore } from "@reduxjs/toolkit";
import { authSlice, listenToAuthenticationChanges } from "./slices/authSlice";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../Config/firebaseConfig"
const firebaseApp = initializeApp(firebaseConfig);

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          firebaseApp,
        },
      },
    }),
});

store.dispatch(listenToAuthenticationChanges());

//enablePersistence(store, firebaseApp);

export default store;