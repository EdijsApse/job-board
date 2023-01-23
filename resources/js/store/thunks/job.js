import axios from "../../axios";
import { axiosErrorResponseHandler } from "../../helpers";
import { alertActions } from "../slices/alert";
import { jobActions } from "../slices/job";

export const getJobs = () => {
    return (dispatch) => {
        dispatch(jobActions.setLoadingState({ isLoading: true }));
        axios
            .get("/job")
            .then((res) => {
                const { jobs } = res.data;
                if (jobs && jobs.length) {
                    dispatch(jobActions.setItems({ items: jobs }));
                }
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
