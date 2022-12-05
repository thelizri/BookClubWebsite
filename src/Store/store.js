import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authReducer";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});