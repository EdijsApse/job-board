import { useState } from "react";
import BaseFormInput from "../../../UI/BaseFormInput";
import BaseTextareaInput from "../../../UI/BaseTextareaInput";
import axios from "../../../../axios";
import { useDispatch } from "react-redux";
import { alertActions } from "../../../../store/slices/alert";
import { axiosErrorResponseHandler } from "../../../../helpers";
import { resumeActions } from "../../../../store/slices/resume";
import LoadingSpinner from "../../../UI/LoadingSpinner";

const Form = ({ education, onCloseForm }) => {
    const { temp_id, id } = education;
    const [field, setField] = useState(education.field);
    const [school, setSchool] = useState(education.school);
    const [year, setYear] = useState(education.year);
    const [summary, setSummary] = useState(education.summary ?? "");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const addNewEducation = () => {
        axios
            .post("/candidate-resume/education", {
                school,
                field,
                year,
                summary,
            })
            .then((res) => {
                const { success, message, education } = res.data;
                if (success === true) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(resumeActions.addEducation({ education }));
                    dispatch(resumeActions.removeEducation({ temp_id }));
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

    const updateExistingEducation = () => {
        axios
            .put(`/candidate-resume/education/${id}`, {
                school,
                field,
                year,
                summary,
            })
            .then((res) => {
                const { success, message, education } = res.data;
                if (success === true) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(resumeActions.replaceEducation({ education, id }));
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

    const onSaveHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        if (id) {
            updateExistingEducation();
        } else {
            addNewEducation();
        }
    };

    return (
        <form className="dashboard-form" onSubmit={onSaveHandler}>
            {isLoading && <LoadingSpinner />}
            <div className="row">
                <div className="col-6">
                    <BaseFormInput
                        id="edu-field"
                        labelName="Field"
                        labelClassName="bold"
                        value={field}
                        setInputValue={(field) => {
                            setField(field);
                        }}
                        inputErrorMessage={errors.field}
                        isRequired
                    />
                </div>
                <div className="col-6">
                    <BaseFormInput
                        id="edu-school"
                        labelName="School"
                        labelClassName="bold"
                        value={school}
                        setInputValue={(school) => {
                            setSchool(school);
                        }}
                        inputErrorMessage={errors.school}
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <BaseFormInput
                        id="edu-year"
                        labelName="Year"
                        labelClassName="bold"
                        value={year}
                        setInputValue={(year) => {
                            setYear(year);
                        }}
                        inputErrorMessage={errors.year}
                        type="number"
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BaseTextareaInput
                        id="edu-summary"
                        labelName="Short summary about subjects which you learned"
                        labelClassName="bold"
                        value={summary}
                        setNewValue={(summary) => {
                            setSummary(summary);
                        }}
                        inputErrorMessage={errors.summary}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Save education
            </button>
        </form>
    );
};

export default Form;
