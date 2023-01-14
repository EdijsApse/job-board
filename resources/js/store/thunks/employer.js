import axios from "../../axios";
import { alertActions } from "../slices/alert";
import { authActions } from "../slices/auth";
import { employerActions } from "../slices/employer";

export const updateCompanyDetails = (companyDetails) => {
    return (dispatch) => {
        dispatch(employerActions.setLoadingState({ isLoading: true }));
        dispatch(employerActions.setFormErrors({ errors: {} }));
        axios
            .post("/user/company", companyDetails)
            .then((res) => {
                const { user, success, message } = res.data;
                if (success === true) {
                    dispatch(authActions.authenticateUser({ user }));
                    dispatch(
                        alertActions.showSuccessAlert({
                            message: "Company details updated!",
                        })
                    );
                } else {
                    dispatch(
                        alertActions.showWarningAlert({ message: message })
                    );
                }
                dispatch(employerActions.setLoadingState({ isLoading: false }));
            })
            .catch((error) => {
                const { errors } = error.response.data;
                const errorBag = {};
                if (errors) {
                    for (const input in errors) {
                        errorBag[input] = errors[input][0];
                    }
                    dispatch(
                        employerActions.setFormErrors({ errors: errorBag })
                    );
                } else {
                    dispatch(
                        alertActions.showWarningAlert({
                            message:
                                "Ooops.... Something went wrong! Please try again later!",
                        })
                    );
                }
                dispatch(employerActions.setLoadingState({ isLoading: false }));
            });
    };
};
