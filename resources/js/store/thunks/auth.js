import { authActions, storageTokenKey } from "../slices/auth";
import axios from "../../axios";
import { alertActions } from "../slices/alert";
import { axiosErrorResponseHandler } from "../../helpers";

export const register = (payload) => {
    return async (dispatch) => {
        dispatch(authActions.changeLoadingState({ isLoading: true }));
        dispatch(authActions.setRegisterFormErrors({ errors: {} }));
        axios
            .post("/register", payload)
            .then((response) => {
                const { user, token } = response.data;
                if (user && token) {
                    dispatch(authActions.authenticateUser({ user: user }));
                    dispatch(authActions.setUserAsLoaded());
                    dispatch(
                        alertActions.showSuccessAlert({
                            message: "Successfully registered!",
                        })
                    );
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${token}`,
                    };
                    localStorage.setItem(storageTokenKey, token);
                }
            })
            .catch((error) => {
                axiosErrorResponseHandler(
                    error,
                    (formErrors) => {
                        dispatch(
                            authActions.setRegisterFormErrors({
                                errors: formErrors,
                            })
                        );
                    },
                    (message) => {
                        dispatch(
                            alertActions.showWarningAlert({ message: message })
                        );
                    }
                );
            })
            .finally(() => {
                dispatch(authActions.changeLoadingState({ isLoading: false }));
            });
    };
};

export const login = (payload) => {
    return async (dispatch) => {
        dispatch(authActions.changeLoadingState({ isLoading: true }));
        dispatch(authActions.setLoginFormErrors({ errors: {} }));
        axios
            .post("/login", payload)
            .then((response) => {
                const { user, token, error } = response.data;
                if (user && token) {
                    dispatch(authActions.authenticateUser({ user: user }));
                    dispatch(authActions.setUserAsLoaded());
                    dispatch(
                        alertActions.showSuccessAlert({
                            message: "Welcome back!",
                        })
                    );
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${token}`,
                    };
                    localStorage.setItem(storageTokenKey, token);
                } else if (error) {
                    dispatch(
                        alertActions.showWarningAlert({
                            message: error,
                        })
                    );
                }
            })
            .catch((error) => {
                axiosErrorResponseHandler(
                    error,
                    (formErrors) => {
                        dispatch(
                            authActions.setLoginFormErrors({
                                errors: formErrors,
                            })
                        );
                    },
                    (message) => {
                        dispatch(
                            alertActions.showWarningAlert({ message: message })
                        );
                    }
                );
            })
            .finally(() => {
                dispatch(authActions.changeLoadingState({ isLoading: false }));
            });
    };
};

export const refreshUser = () => {
    return async (dispatch) => {
        const token = localStorage.getItem(storageTokenKey);
        if (!token) {
            dispatch(authActions.setUserAsLoaded());
            return;
        }
        axios.defaults.headers.common = {
            Authorization: `Bearer ${token}`,
        };
        axios
            .get("/user")
            .then((response) => {
                const { user } = response.data;
                if (user) {
                    dispatch(authActions.authenticateUser({ user: user }));
                    dispatch(authActions.setUserAsLoaded());
                }
            })
            .catch(() => {
                localStorage.removeItem(storageTokenKey);
                dispatch(authActions.setUserAsLoaded());
            });
    };
};
