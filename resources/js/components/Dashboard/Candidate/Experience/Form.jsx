import { useState } from "react";
import BaseFormInput from "../../../UI/BaseFormInput";
import BaseTextareaInput from "../../../UI/BaseTextareaInput";
import axios from "../../../../axios";
import { useDispatch } from "react-redux";
import { alertActions } from "../../../../store/slices/alert";
import { axiosErrorResponseHandler } from "../../../../helpers";
import { resumeActions } from "../../../../store/slices/resume";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import Fade from "../../../Animations/Fade";

const Form = ({ experience, onCloseForm }) => {
    const { temp_id, id } = experience;
    const [employer, setEmployer] = useState(experience.employer);
    const [jobtitle, setJobtitle] = useState(experience.jobtitle);
    const [dateFrom, setDateFrom] = useState(experience.date_from);
    const [dateTo, setDateTo] = useState(experience.date_to);
    const [duties, setDuties] = useState(experience.duties ?? "");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const addNewExp = () => {
        axios
            .post("/candidate-resume/experience", {
                employer,
                jobtitle,
                date_from: dateFrom,
                date_to: dateTo,
                duties,
            })
            .then((res) => {
                const { success, message, experience } = res.data;
                if (success === true) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(resumeActions.addExperience({ experience }));
                    dispatch(resumeActions.removeTempExperience({ temp_id }));
                }
            })
            .catch((err) => {
                axiosErrorResponseHandler(
                    err,
                    (errors) => {
                        setErrors(errors);
                    },
                    () => {
                        dispatch(
                            alertActions.showWarningAlert({
                                message:
                                    "Something went wrong! Try again later!",
                            })
                        );
                    }
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const updateExistingExp = () => {
        axios
            .put(`/candidate-resume/experience/${id}`, {
                employer,
                jobtitle,
                date_from: dateFrom,
                date_to: dateTo,
                duties,
            })
            .then((res) => {
                const { success, message, experience } = res.data;
                if (success === true) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(
                        resumeActions.replaceExperience({ experience, id })
                    );
                    onCloseForm();
                } else {
                    dispatch(alertActions.showWarningAlert({ message }));
                }
            })
            .catch((err) => {
                axiosErrorResponseHandler(
                    err,
                    (errors) => {
                        setErrors(errors);
                    },
                    () => {
                        dispatch(
                            alertActions.showWarningAlert({
                                message:
                                    "Something went wrong! Try again later!",
                            })
                        );
                    }
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onSaveExperience = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        if (id) {
            updateExistingExp();
        } else {
            addNewExp();
        }
    };

    return (
        <form className="dashboard-form" onSubmit={onSaveExperience}>
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="row">
                <div className="col-6">
                    <BaseFormInput
                        id="exp-jobtitle"
                        labelName="Jobtitle"
                        labelClassName="bold"
                        value={jobtitle}
                        setInputValue={(title) => {
                            setJobtitle(title);
                        }}
                        inputErrorMessage={errors.jobtitle}
                        isRequired
                    />
                </div>
                <div className="col-6">
                    <BaseFormInput
                        id="exp-employer"
                        labelName="Employer"
                        labelClassName="bold"
                        value={employer}
                        setInputValue={(employer) => {
                            setEmployer(employer);
                        }}
                        inputErrorMessage={errors.employer}
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <BaseFormInput
                        id="exp-date-from"
                        labelName="Date From"
                        labelClassName="bold"
                        value={dateFrom}
                        setInputValue={(date) => {
                            setDateFrom(date);
                        }}
                        inputErrorMessage={errors.date_from}
                        type="date"
                        isRequired
                    />
                </div>
                <div className="col-6">
                    <BaseFormInput
                        id="exp-date-to"
                        labelName="Date To"
                        labelClassName="bold"
                        value={dateTo}
                        setInputValue={(date) => {
                            setDateTo(date);
                        }}
                        inputErrorMessage={errors.date_to}
                        type="date"
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BaseTextareaInput
                        id="exp-duties"
                        labelName="Short description about your duties"
                        labelClassName="bold"
                        value={duties}
                        setNewValue={(duties) => {
                            setDuties(duties);
                        }}
                        inputErrorMessage={errors.notes}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Save experience
            </button>
        </form>
    );
};

export default Form;
