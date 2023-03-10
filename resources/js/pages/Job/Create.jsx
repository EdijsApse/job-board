import BreadCrumbs from "../../components/UI/Breadcrumbs";
import Wrapper from "../../components/UI/Wrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import Fade from "../../components/Animations/Fade";
import { useNavigate } from "react-router-dom";
import JobForm from "../../components/Job/Form";
import axios from "../../axios";
import { alertActions } from "../../store/slices/alert";
import { axiosErrorResponseHandler } from "../../helpers";

const CreateJob = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const submitJobHandler = (jobData) => {
        setIsLoading(true);
        setErrors({});
        axios
            .post("/job", jobData)
            .then((res) => {
                const { job, success, message } = res.data;
                if (success) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                    navigate(`/jobs/${job.id}`);
                }
            })
            .catch((error) => {
                axiosErrorResponseHandler(
                    error,
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

    const crumbs = [
        {
            link: "/",
            title: "Home",
        },
        { link: "/jobs", title: "Jobs" },
        {
            link: "/jobs/create",
            title: "Create",
        },
    ];

    return (
        <div className="page create-job-page">
            <div className="page-header">
                <h1>Create Job</h1>
                <BreadCrumbs crumbs={crumbs} />
            </div>
            <main className="page-main container-fluid">
                <Wrapper className="job-form-section relative">
                    <Fade isVisible={isLoading}>
                        <LoadingSpinner />
                    </Fade>
                    <h2>Post Job</h2>
                    <JobForm
                        onFormSubmit={submitJobHandler}
                        errors={errors}
                        buttonLabel="Create Job"
                    />
                </Wrapper>
            </main>
        </div>
    );
};

export default CreateJob;
