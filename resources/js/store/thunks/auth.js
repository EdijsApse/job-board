import { authActions, storageTokenKey } from "../slices/auth";
import axios from "../../axios";
import { alertActions } from "../slices/alert";
import { axiosErrorResponseHandler } from "../../helpers";

export const redirectOnSuccessCallback = (redirect, user, dispatch) => {
    const {
        is_candidate,
        is_employer,
        profile,
        basic_resume_details,
        company,
    } = user;

    if (!profile) {
        dispatch(
            alertActions.showWarningAlert({
                message: "Complete your profile !",
            })
        );
        return redirect("/dashboard/profile");
    }

    if (is_candidate) {
        if (!basic_resume_details) {
            dispatch(
                alertActions.showWarningAlert({
                    message:
                        "Add your resume details, so you can become visible to employers!",
                })
            );
            return redirect("/dashboard/resume");
        } else {
            return redirect("/jobs");
        }
    }

    if (is_employer) {
        if (!company) {
            dispatch(
                alertActions.showWarningAlert({
                    message: "Add company details, to start posting jobs!",
                })
            );
            return redirect("/dashboard/company");
        } else {
            return redirect("/candidates");
        }
    }

    return redirect("/");
};

export const register = (payload, successCallback) => {
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
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${token}`,
                    };
                    localStorage.setItem(storageTokenKey, token);
                    successCallback(user, dispatch);
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

export const login = (payload, successCallback) => {
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
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${token}`,
                    };
                    localStorage.setItem(storageTokenKey, token);
                    successCallback(user, dispatch);
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

export const refreshUser = (successCallback) => {
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
                    successCallback(user, dispatch);
                }
            })
            .catch(() => {
                localStorage.removeItem(storageTokenKey);
                dispatch(authActions.setUserAsLoaded());
            });
    };
};
