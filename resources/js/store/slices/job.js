import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    isLoading: false,
    formErrors: {},
};

const JobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setLoadingState(state, { payload }) {
            state.isLoading = payload.isLoading;
        },
        setFormErrors(state, { payload }) {
            state.formErrors = payload.errors;
        },
        setItems(state, { payload }) {
            state.list = payload.items;
        }
    },
});

export const jobActions = JobSlice.actions;

export default JobSlice.reducer;
