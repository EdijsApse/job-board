import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: true,
    message: null,
};

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        showWarningAlert(state, { payload }) {
            state.message = payload.message;
            state.success = false;
        },
        showSuccessAlert(state, { payload }) {
            state.message = payload.message;
            state.success = true;
        },
        hideAlert(state) {
            state.message = null;
        },
    },
});

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
