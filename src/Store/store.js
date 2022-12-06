import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/";
import { setupListeners } from "@reduxjs/toolkit/query";

/**
 * Application state.
 */
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // api reducer
    },

    // API middleware for caching, invalidation, polling etc.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)

})

setupListeners(store.dispatch)