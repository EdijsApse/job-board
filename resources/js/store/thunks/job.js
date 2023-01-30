import axios from "../../axios";
import { axiosErrorResponseHandler } from "../../helpers";
import { alertActions } from "../slices/alert";
import { jobActions } from "../slices/job";

export const getJobs = (searchParams) => {
    return (dispatch) => {
        const params = new URLSearchParams();

        for (let key in searchParams) {
            if (searchParams[key]) {
                params.append(key, searchParams[key]);
            }
        }

        const queryString = params.toString();
        let url = queryString ? `/job?${queryString}` : "/job";

        dispatch(jobActions.setLoadingState({ isLoading: true }));

        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispatch(jobActions.setItems({ items: data, meta: meta }));
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Could't load jobs list!",
                    })
                );
            })
            .finally(() => {
                dispatch(jobActions.setLoadingState({ isLoading: false }));
            });
    };
};

export const createJob = (jobDetails) => {
    return (dispatch) => {
        dispatch(jobActions.setLoadingState({ isLoading: true }));
        dispatch(jobActions.setFormErrors({ errors: {} }));
        axios
            .post("/job", jobDetails)
            .then((res) => {
                const { job, success, message } = res.data;
                if (success) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                }
            })
            .catch((error) => {
                axiosErrorResponseHandler(
                    error,
                    (formErrors) => {
                        dispatch(
                            jobActions.setFormErrors({
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
                dispatch(jobActions.setLoadingState({ isLoading: false }));
            });
    };
};
