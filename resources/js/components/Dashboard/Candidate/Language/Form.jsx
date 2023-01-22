import { useState } from "react";
import BaseTextareaInput from "../../../UI/BaseTextareaInput";
import axios from "../../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../../../../store/slices/alert";
import { axiosErrorResponseHandler } from "../../../../helpers";
import { resumeActions } from "../../../../store/slices/resume";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import BaseFormSelect from "../../../UI/BaseFormSelect";

const Form = ({ language, onCloseForm }) => {
    const languages = useSelector((state) => state.selectOptions.languages);
    const languageLevels = useSelector(
        (state) => state.selectOptions.languageLevels
    );

    const { temp_id, id } = language;
    const [language_id, setLanguage] = useState(language.language_id);
    const [language_level_id, setLanguageLevel] = useState(
        language.language_level_id
    );
    const [notes, setNotes] = useState(language.additional_notes ?? "");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const addNewResumeLanguage = () => {
        axios
            .post("/candidate-resume/language", {
                language_id,
                language_level_id,
                additional_notes: notes,
            })
            .then((res) => {
                const { success, message, resume_language } = res.data;
                if (success === true) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(
                        resumeActions.addLanguage({ language: resume_language })
                    );
                    dispatch(resumeActions.removeLanguage({ temp_id }));
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

    const updateExistingLanguage = () => {
        axios
            .put(`/candidate-resume/language/${id}`, {
                language_id,
                language_level_id,
                additional_notes: notes,
            })
            .then((res) => {
                const { success, message, resume_language } = res.data;
                if (success === true) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    dispatch(
                        resumeActions.replaceLanguage({
                            language: resume_language,
                            id,
                        })
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

    const onSaveHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({});
        if (id) {
            updateExistingLanguage();
        } else {
            addNewResumeLanguage();
        }
    };

    return (
        <form className="dashboard-form" onSubmit={onSaveHandler}>
            {isLoading && <LoadingSpinner />}
            <div className="row">
                <div className="col-6">
                    <BaseFormSelect
                        id="language-id"
                        labelName="Language"
                        labelClassName="bold"
                        selected={language_id}
                        selectValue={(lang) => {
                            setLanguage(lang);
                        }}
                        placeholder="Select language"
                        options={languages}
                        inputErrorMessage={errors.language_id}
                        isRequired
                    />
                </div>
                <div className="col-6">
                    <BaseFormSelect
                        id="language-level-id"
                        labelName="Level of proficiency"
                        labelClassName="bold"
                        selected={language_level_id}
                        selectValue={(level) => {
                            setLanguageLevel(level);
                        }}
                        placeholder="Select the level of proficiency"
                        options={languageLevels}
                        inputErrorMessage={errors.language_level_id}
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BaseTextareaInput
                        id="additional-notes"
                        labelName="Additional notes about proficiency in this language"
                        labelClassName="bold"
                        value={notes}
                        setNewValue={(note) => {
                            setNotes(note);
                        }}
                        inputErrorMessage={errors.additional_notes}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Save language
            </button>
        </form>
    );
};

export default Form;
