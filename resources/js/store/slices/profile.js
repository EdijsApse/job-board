import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    errors: {},
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setLoadingState(state, { payload }) {
            state.isLoading = payload.isLoading;
        },
        setFormErrors(state, { payload }) {
            state.errors = payload.errors;
        },
    },
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
