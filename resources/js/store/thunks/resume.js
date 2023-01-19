import axios from "../../axios";
import { axiosErrorResponseHandler } from "../../helpers";
import { alertActions } from "../slices/alert";
import { resumeActions } from "../slices/resume";

export const getResumeBasicDetails = () => {
    return (dispatch) => {
        dispatch(resumeActions.setBasicIsLoadingState({ isLoading: true }));
        axios
            .get("/candidate-resume/basic")
            .then((res) => {
                const { details } = res.data;
                dispatch(
                    resumeActions.setBasicIsLoadingState({ isLoading: false })
                );
                dispatch(
                    resumeActions.setBasicDetails({
                        details: details ? details : {},
                    })
                );
            })
            .catch((err) => {
                dispatch(
                    resumeActions.setBasicIsLoadingState({ isLoading: false })
                );
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldn't load resume basic details!",
                    })
                );
            });
    };
};

export const updateResumeBasicDetails = (details) => {
    return (dispatch) => {
        dispatch(resumeActions.setBasicIsLoadingState({ isLoading: true }));
        dispatch(resumeActions.setBasicFormErrors({ errors: {} }));
        axios
            .post("/candidate-resume/basic", details)
            .then((res) => {
                const { success, message, details } = res.data;
                if (success) {
                    dispatch(
                        resumeActions.setBasicDetails({
                            details: details ? details : {},
                        })
                    );
                    dispatch(alertActions.showSuccessAlert({ message }));
                }
                dispatch(
                    resumeActions.setBasicIsLoadingState({ isLoading: false })
                );
            })
            .catch((error) => {
                axiosErrorResponseHandler(
                    error,
                    (formErrors) => {
                        dispatch(
                            resumeActions.setBasicFormErrors({
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
                dispatch(
                    resumeActions.setBasicIsLoadingState({ isLoading: false })
                );
            });
    };
};

export const getSalaryDetails = () => {
    return (dispatch) => {
        dispatch(resumeActions.setSalaryIsLoadingState({ isLoading: true }));
        axios
            .get("/candidate-resume/salary")
            .then((res) => {
                const { details } = res.data;
                if (details) {
                    dispatch(resumeActions.setSalaryDetails({ details }));
                }
                dispatch(
                    resumeActions.setSalaryIsLoadingState({ isLoading: false })
                );
            })
            .catch((error) => {
                dispatch(
                    resumeActions.setSalaryIsLoadingState({ isLoading: false })
                );
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldnt load salary details!",
                    })
                );
            });
    };
};

export const updateSalaryDetails = (details) => {
    return (dispatch) => {
        dispatch(resumeActions.setSalaryIsLoadingState({ isLoading: true }));
        dispatch(resumeActions.setSalaryFormErrors({ errors: {} }));
        axios
            .post("/candidate-resume/salary", details)
            .then((res) => {
                const { success, message, details } = res.data;
                if (success) {
                    dispatch(
                        resumeActions.setSalaryDetails({
                            details,
                        })
                    );
                    dispatch(alertActions.showSuccessAlert({ message }));
                }
                dispatch(
                    resumeActions.setSalaryIsLoadingState({ isLoading: false })
                );
            })
            .catch((error) => {
                axiosErrorResponseHandler(
                    error,
                    (formErrors) => {
                        dispatch(
                            resumeActions.setSalaryFormErrors({
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
                dispatch(
                    resumeActions.setSalaryIsLoadingState({ isLoading: false })
                );
            });
    };
};
