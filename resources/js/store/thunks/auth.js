import { authActions, storageTokenKey } from "../slices/auth";
import axios from "../../axios";

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
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${token}`,
                    };
                    localStorage.setItem(storageTokenKey, token);
                }
            })
            .catch((error) => {
                const { errors } = error.response.data;
                const errorBag = {};
                if (errors) {
                    for (const input in errors) {
                        errorBag[input] = errors[input][0];
                    }
                    dispatch(
                        authActions.setRegisterFormErrors({ errors: errorBag })
                    );
                }
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
                const { user, token } = response.data;
                if (user && token) {
                    dispatch(authActions.authenticateUser({ user: user }));
                    axios.defaults.headers.common = {
                        Authorization: `Bearer ${token}`,
                    };
                    localStorage.setItem(storageTokenKey, token);
                }
            })
            .catch((error) => {
                const { errors } = error.response.data;
                const errorBag = {};
                if (errors) {
                    for (const input in errors) {
                        errorBag[input] = errors[input][0];
                    }
                    dispatch(
                        authActions.setLoginFormErrors({ errors: errorBag })
                    );
                }
            })
            .finally(() => {
                dispatch(authActions.changeLoadingState({ isLoading: false }));
            });
    };
};

export const refreshUser = () => {
    return async (dispatch) => {
        const token = localStorage.getItem(storageTokenKey);
        dispatch(authActions.setRefreshingUserState({ refreshingUser: true }));
        if (!token) {
            dispatch(
                authActions.setRefreshingUserState({ refreshingUser: false })
            );
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
                }
            })
            .catch(() => {
                localStorage.removeItem(storageTokenKey);
            })
            .finally(() => {
                dispatch(
                    authActions.setRefreshingUserState({
                        refreshingUser: false,
                    })
                );
            });
    };
};
