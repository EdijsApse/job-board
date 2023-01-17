import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basic: {
        details: {},
        isLoading: false,
        errors: {},
    },
};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        setBasicFormErrors(state, { payload }) {
            state.basic.errors = payload.errors;
        },
        setBasicIsLoadingState(state, { payload }) {
            state.basic.isLoading = payload.isLoading;
        },
        setBasicDetails(state, { payload }) {
            state.basic.details = payload.details;
        },
    },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;
