import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert";
import authSlice from "./slices/auth";
import selectOptionsSlice from "./slices/select-options";
import employerSlice from "./slices/employer";

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert: alertSlice,
        selectOptions: selectOptionsSlice,
        employer: employerSlice,
    },
});

export default store;
