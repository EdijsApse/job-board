import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert";
import authSlice from './slices/auth';
import selectOptionsSlice from "./slices/select-options";

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert: alertSlice,
        selectOptions: selectOptionsSlice
    }
})

export default store;