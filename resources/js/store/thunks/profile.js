import axios from "../../axios";
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
                const { errors } = error.response.data;
                const errorBag = {};
                if (errors) {
                    for (const input in errors) {
                        errorBag[input] = errors[input][0];
                    }
                    dispatch(
                        profileActions.setFormErrors({ errors: errorBag })
                    );
                } else {
                    dispatch(
                        alertActions.showWarningAlert({
                            message:
                                "Ooops.... Something went wrong! Please try again later!",
                        })
                    );
                }
                dispatch(profileActions.setLoadingState({ isLoading: false }));
            });
    };
};
