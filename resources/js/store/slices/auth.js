import { createSlice } from "@reduxjs/toolkit";

export const LOGIN_MODAL = 1;
export const REGISTER_MODAL = 2;
export const FORGOT_PWD_MODAL = 3;

const initialState = {
    user: null,
    isAuthenticated: false,
    modal: {
        isVisible: false,
        modal_id: null,
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            const { email, password } = action;
            state.user = {};
            state.isAuthenticated = true;
            state.modal.isVisible = false;
        },
        register(state, action) {
            const { email, password, password_confirm } = action;
            state.user = {};
            state.isAuthenticated = true;
            state.modal.isVisible = false;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        },
        showLoginModal(state) {
            state.modal.isVisible = true;
            state.modal.modal_id = LOGIN_MODAL;
        },
        showRegisterModal(state) {
            state.modal.isVisible = true;
            state.modal.modal_id = REGISTER_MODAL;
        },
        showForgotPasswordModal(state) {
            state.modal.isVisible = true;
            state.modal.modal_id = FORGOT_PWD_MODAL;
        },
        hideModal(state) {
            state.modal.isVisible = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
