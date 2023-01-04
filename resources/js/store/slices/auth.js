import { createSlice } from "@reduxjs/toolkit";

export const LOGIN_MODAL = 1;
export const REGISTER_MODAL = 2;
export const FORGOT_PWD_MODAL = 3;
export const storageTokenKey = "personal_user_token";

const initialState = {
    user: null,
    isLoading: false,
    refreshingUser: false,
    isAuthenticated: false,
    registerFormErrors: {},
    loginFormErrors: {},
    modal: {
        isVisible: false,
        modal_id: null,
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setRefreshingUserState(state, { payload }) {
            state.refreshingUser = payload.refreshingUser;
        },
        changeLoadingState(state, action) {
            const { isLoading } = action.payload;
            state.isLoading = isLoading;
        },
        setRegisterFormErrors(state, action) {
            const { errors } = action.payload;
            state.registerFormErrors = errors;
        },
        setLoginFormErrors(state, action) {
            const { errors } = action.payload;
            state.loginFormErrors = errors;
        },
        authenticateUser(state, { payload }) {
            state.user = payload.user;
            state.isAuthenticated = true;
        },
        logout(state) {
            localStorage.removeItem(storageTokenKey);
            window.location.reload();
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
            state.loginFormErrors = {};
            state.registerFormErrors = {};
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
