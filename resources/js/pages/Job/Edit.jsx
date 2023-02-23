import BreadCrumbs from "../../components/UI/Breadcrumbs";
import Wrapper from "../../components/UI/Wrapper";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import Fade from "../../components/Animations/Fade";
import { useNavigate, useParams } from "react-router-dom";
import JobForm from "../../components/Job/Form";
import axios from "../../axios";
import { alertActions } from "../../store/slices/alert";
import { axiosErrorResponseHandler } from "../../helpers";

const EditJob = () => {
    const { id } = useParams();
    const [job, setJob] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            axios
                .get(`/employer/jobs/${id}`)
                .then((res) => {
                    const { job } = res.data;
                    setJob(job);
                })
                .catch((error) => {
                    const { message } = error.response.data;
                    dispatch(alertActions.showWarningAlert({ message }));
                    navigate("/404");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [id]);

    const submitJobHandler = (jobData) => {
        setIsLoading(true);
        setErrors({});
        axios
            .post(`/employer/jobs/${id}?_method=PUT`, jobData)
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
        { link: "/", title: "Home" },
        { link: "/jobs", title: "Jobs" },
        { link: `/jobs/${id}`, title: job.jobtitle ?? "Job" },
        { link: `/jobs/${id}/edit`, title: "Edit" },
    ];

    return (
        <div className="page create-job-page">
            <div className="page-header">
                <h1>Update Job</h1>
                <BreadCrumbs crumbs={crumbs} />
            </div>
            <main className="page-main container-fluid">
                <Wrapper className="job-form-section relative">
                    <Fade isVisible={isLoading}>
                        <LoadingSpinner />
                    </Fade>
                    {job.jobtitle && <h2>Edit {job.jobtitle}</h2>}
                    <JobForm
                        errors={errors}
                        onFormSubmit={submitJobHandler}
                        initialJob={job}
                        buttonLabel="Update Job"
                    />
                </Wrapper>
            </main>
        </div>
    );
};

export default EditJob;
