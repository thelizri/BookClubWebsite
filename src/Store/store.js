import { configureStore } from "@reduxjs/toolkit";
import { googleBooksApi } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

/**
 * Application state.
 */
export const store = configureStore({
    reducer: {
        [googleBooksApi.reducerPath]: googleBooksApi.reducer, // api reducer
    },

    // API middleware for caching, invalidation, polling etc.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(googleBooksApi.middleware)

})

setupListeners(store.dispatch)