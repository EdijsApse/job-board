import { useState } from "react";
import BaseTextareaInput from "../UI/BaseTextareaInput";
import Modal from "../UI/Modal";
import axios from "../../axios";
import LoadingSpinner from "../UI/LoadingSpinner";
import Fade from "../Animations/Fade";
import { useDispatch } from "react-redux";
import { alertActions } from "../../store/slices/alert";
import { axiosErrorResponseHandler } from "../../helpers";

const ApplyModal = ({ onCloseHandler, job }) => {
    const [coverLetter, setCoverLetter] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);
        axios
            .post("/application", { job_id: job.id, cover_letter: coverLetter })
            .then((res) => {
                const { success, message } = res.data;
                if (success === true) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    onCloseHandler();
                } else {
                    dispatch(alertActions.showWarningAlert({ message }));
                }
            })
            .catch((err) => {
                axiosErrorResponseHandler(
                    err,
                    (formErrors) => {
                        setErrors(formErrors);
                    },
                    (message) => {
                        dispatch(
                            alertActions.showWarningAlert({ message: message })
                        );
                    }
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <Modal onClose={onCloseHandler}>
            <h2 className="modal-title">Create Job application</h2>
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <form onSubmit={onSubmitHandler} className="apply-modal-form">
                <BaseTextareaInput
                    id="cover-letter"
                    labelName="Cover letter"
                    labelClassName="bold"
                    value={coverLetter}
                    setNewValue={(coverLetter) => {
                        setCoverLetter(coverLetter);
                    }}
                    inputErrorMessage={errors.cover_letter}
                />
                {errors.job_id && (
                    <p className="input-error">{errors.job_id}</p>
                )}
                <button className="btn btn-primary">Submit application</button>
            </form>
        </Modal>
    );
};

export default ApplyModal;
