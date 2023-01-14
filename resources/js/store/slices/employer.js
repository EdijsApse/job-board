import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    errors: {},
};

const employerSlice = createSlice({
    name: "employer",
    initialState,
    reducers: {
        setLoadingState(state, { payload }) {
            const { isLoading } = payload;
            state.isLoading = isLoading;
        },
        setFormErrors(state, { payload }) {
            const { errors } = payload;
            state.errors = errors;
        },
    },
});

export const employerActions = employerSlice.actions;

export default employerSlice.reducer;
