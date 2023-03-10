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

export const getExperiences = () => {
    return (dispatch) => {
        dispatch(
            resumeActions.setExperienceLoadingState({
                isLoading: true,
            })
        );
        axios
            .get("/candidate-resume/experience")
            .then((res) => {
                const { experiences } = res.data;
                dispatch(
                    resumeActions.setExperiences({
                        experiences: experiences ? experiences : [],
                    })
                );
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldn't load list of your experiences!",
                    })
                );
            })
            .finally(() => {
                dispatch(
                    resumeActions.setExperienceLoadingState({
                        isLoading: false,
                    })
                );
            });
    };
};

export const deleteExperience = (id) => {
    return (dispatch) => {
        dispatch(
            resumeActions.setExperienceLoadingState({
                isLoading: true,
            })
        );
        axios
            .delete(`/candidate-resume/experience/${id}`)
            .then((res) => {
                const { message, success } = res.data;
                if (success) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(resumeActions.removeExperience({ id }));
                } else {
                    dispatch(alertActions.showWarningAlert({ message }));
                }
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldn't delete experiences!",
                    })
                );
            })
            .finally(() => {
                dispatch(
                    resumeActions.setExperienceLoadingState({
                        isLoading: false,
                    })
                );
            });
    };
};

export const getEducations = () => {
    return (dispatch) => {
        dispatch(
            resumeActions.setEducationLoadingState({
                isLoading: true,
            })
        );
        axios
            .get("/candidate-resume/education")
            .then((res) => {
                const { educations } = res.data;
                dispatch(
                    resumeActions.setEducations({
                        educations: educations ?? [],
                    })
                );
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldn't load list of your educations!",
                    })
                );
            })
            .finally(() => {
                dispatch(
                    resumeActions.setEducationLoadingState({
                        isLoading: false,
                    })
                );
            });
    };
};

export const deleteEducation = (id) => {
    return (dispatch) => {
        dispatch(
            resumeActions.setEducationLoadingState({
                isLoading: true,
            })
        );
        axios
            .delete(`/candidate-resume/education/${id}`)
            .then((res) => {
                const { message, success } = res.data;
                if (success) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(resumeActions.removeEducation({ id }));
                } else {
                    dispatch(alertActions.showWarningAlert({ message }));
                }
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldn't delete educations!",
                    })
                );
            })
            .finally(() => {
                dispatch(
                    resumeActions.setEducationLoadingState({
                        isLoading: false,
                    })
                );
            });
    };
};

export const getResumeLanguages = () => {
    return (dispatch) => {
        dispatch(
            resumeActions.setLanguageLoadingState({
                isLoading: true,
            })
        );
        axios
            .get("/candidate-resume/language")
            .then((res) => {
                const { resume_languages } = res.data;
                dispatch(
                    resumeActions.setLanguages({
                        languages: resume_languages ?? [],
                    })
                );
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldn't load list of your languages!",
                    })
                );
            })
            .finally(() => {
                dispatch(
                    resumeActions.setLanguageLoadingState({
                        isLoading: false,
                    })
                );
            });
    };
};

export const deleteLanguage = (id) => {
    return (dispatch) => {
        dispatch(
            resumeActions.setLanguageLoadingState({
                isLoading: true,
            })
        );
        axios
            .delete(`/candidate-resume/language/${id}`)
            .then((res) => {
                const { message, success } = res.data;
                if (success) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(resumeActions.removeLanguage({ id }));
                } else {
                    dispatch(alertActions.showWarningAlert({ message }));
                }
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Couldn't delete language!",
                    })
                );
            })
            .finally(() => {
                dispatch(
                    resumeActions.setLanguageLoadingState({
                        isLoading: false,
                    })
                );
            });
    };
};
