import { useState } from "react";
import BaseTextareaInput from "../UI/BaseTextareaInput";
import Modal from "../UI/Modal";

const ApplyModal = ({ onCloseHandler, job }) => {
    const [coverLetter, setCoverLetter] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Modal onClose={onCloseHandler}>
            <h2 className="modal-title">Create Job application</h2>
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
                <button className="btn btn-primary">Submit application</button>
            </form>
        </Modal>
    );
};

export default ApplyModal;
