import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert";
import authSlice from './slices/auth';

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert: alertSlice
    }
})

export default store;