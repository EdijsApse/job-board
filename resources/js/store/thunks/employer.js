import axios from "../../axios";
import { axiosErrorResponseHandler } from "../../helpers";
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
                axiosErrorResponseHandler(
                    error,
                    (formErrors) => {
                        dispatch(
                            employerActions.setFormErrors({
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
                dispatch(employerActions.setLoadingState({ isLoading: false }));
            });
    };
};

export const getEmployers = (searchParams) => {
    return (dispatch) => {
        const params = new URLSearchParams();

        for (let key in searchParams) {
            if (searchParams[key]) {
                params.append(key, searchParams[key]);
            }
        }

        const queryString = params.toString();
        let url = queryString ? `/employer?${queryString}` : "/employer";

        dispatch(employerActions.setLoadingState({ isLoading: true }));

        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispatch(
                    employerActions.setListingDetails({
                        items: data,
                        meta: meta,
                    })
                );
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Could't load list of employers!",
                    })
                );
            })
            .finally(() => {
                dispatch(employerActions.setLoadingState({ isLoading: false }));
            });
    };
};
