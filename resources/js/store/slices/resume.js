import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basic: {
        details: {},
        isLoading: false,
        errors: {},
    },
    salary: {
        details: {},
        isLoading: false,
        errors: {},
    },
};

const BasicDetailsReducers = {
    setBasicFormErrors(state, { payload }) {
        state.basic.errors = payload.errors;
    },
    setBasicIsLoadingState(state, { payload }) {
        state.basic.isLoading = payload.isLoading;
    },
    setBasicDetails(state, { payload }) {
        state.basic.details = payload.details;
    },
};

const SalaryDetailsReducers = {
    setSalaryFormErrors(state, { payload }) {
        state.salary.errors = payload.errors;
    },
    setSalaryIsLoadingState(state, { payload }) {
        state.salary.isLoading = payload.isLoading;
    },
    setSalaryDetails(state, { payload }) {
        state.salary.details = payload.details;
    },
}

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        ...BasicDetailsReducers,
        ...SalaryDetailsReducers
    },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;
