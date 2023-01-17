import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert";
import authSlice from "./slices/auth";
import selectOptionsSlice from "./slices/select-options";
import employerSlice from "./slices/employer";
import profileSlice from "./slices/profile";
import resumeSlice from "./slices/resume";

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert: alertSlice,
        selectOptions: selectOptionsSlice,
        employer: employerSlice,
        profile: profileSlice,
        resume: resumeSlice
    },
});

export default store;
