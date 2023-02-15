import { useState } from "react";
import BaseFormSelect from "../UI/BaseFormSelect";
import Modal from "../UI/Modal";
import axios from "../../axios";
import LoadingSpinner from "../UI/LoadingSpinner";
import Fade from "../Animations/Fade";
import { useDispatch } from "react-redux";
import { alertActions } from "../../store/slices/alert";
import { axiosErrorResponseHandler } from "../../helpers";
import useUser from "../../hooks/use-user";

const OfferModal = ({ onCloseHandler, candidateId }) => {
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [jobId, setJobId] = useState("");
    const dispatch = useDispatch();

    const { company } = useUser();
    const jobsList = company ? company.offerable_jobs : [];

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setErrors({});
        setIsLoading(true);
        axios
            .post("/offer", { candidate_id: candidateId, job_id: jobId })
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
            <h2 className="modal-title">Offer job</h2>
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <form onSubmit={onSubmitHandler} className="apply-modal-form">
                <BaseFormSelect
                    id="job_id"
                    labelName="Select Job"
                    labelClassName="bold"
                    selected={jobId}
                    selectValue={(job) => {
                        setJobId(job);
                    }}
                    placeholder="Select from list"
                    options={jobsList}
                    optionLabelName="jobtitle"
                    optionValueName="id"
                    inputErrorMessage={errors.job_id}
                    isRequired
                />
                {errors.candidate_id && (
                    <p className="input-error">{errors.candidate_id}</p>
                )}
                <button className="btn btn-primary">Send offer</button>
            </form>
        </Modal>
    );
};

export default OfferModal;
