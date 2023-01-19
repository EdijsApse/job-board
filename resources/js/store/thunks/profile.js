import axios from "../../axios";
import { axiosErrorResponseHandler } from "../../helpers";
import { alertActions } from "../slices/alert";
import { authActions } from "../slices/auth";
import { profileActions } from "../slices/profile";
export const updateProfileDetails = (details) => {
    return (dispatch) => {
        dispatch(profileActions.setFormErrors({ errors: {} }));
        dispatch(profileActions.setLoadingState({ isLoading: true }));
        axios
            .post("/user/profile", details)
            .then((res) => {
                const { success, message, user } = res.data;
                if (success === true) {
                    dispatch(authActions.authenticateUser({ user }));
                    dispatch(alertActions.showSuccessAlert({ message }));
                }
                dispatch(profileActions.setLoadingState({ isLoading: false }));
            })
            .catch((error) => {
                axiosErrorResponseHandler(
                    error,
                    (formErrors) => {
                        dispatch(
                            profileActions.setFormErrors({ errors: formErrors })
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
                dispatch(profileActions.setLoadingState({ isLoading: false }));
            });
    };
};
