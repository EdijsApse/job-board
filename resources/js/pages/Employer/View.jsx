import placeholderImage from "../../components/assets/test-logo.png";
import Badge from "../../components/UI/Badge";
import SingleJobCard from "../../components/Job/Item";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useCallback } from "react";
import axios from "../../axios";
import { useState } from "react";
import { alertActions } from "../../store/slices/alert";
import ViewPage from "../../components/UI/ViewPage";
import OverviewSidebarCard from "../../components/Employer/OverviewSidebarCard";

const EmplyerView = () => {
    const { id } = useParams();
    const [employer, setEmployer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getEmployer = useCallback(() => {
        setIsLoading(true);
        axios
            .get(`/employer/${id}`)
            .then((res) => {
                const { employer } = res.data;
                setEmployer(employer);
            })
            .catch((err) => {
                const responseStatus = err?.response?.status;
                if (responseStatus !== 404) {
                    dispatch(
                        alertActions.showWarningAlert({
                            message: "Oooops error occured!",
                        })
                    );
                }
                navigate("/404");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    useEffect(() => {
        getEmployer();
    }, [getEmployer]);

    if (isLoading) {
        return (
            <ViewPage className="single-employer-page min-h-50 relative">
                <LoadingSpinner />
            </ViewPage>
        );
    }

    const employerLogo = employer.logo ?? placeholderImage;

    return (
        <ViewPage className="single-employer-page">
            <ViewPage.Header>
                <div className="left-col">
                    <div className="single-employer-card">
                        <div className="employer-logo">
                            <img src={employerLogo} alt={employer.name} />
                        </div>
                        <div className="employer-info">
                            <h1 className="view-page-title">{employer.name}</h1>
                            <div className="details-list">
                                <div className="single-detail">
                                    <i className="fa-solid fa-briefcase"></i>
                                    <span>{employer.category.name}</span>
                                </div>
                                <div className="single-detail">
                                    <i className="fa-solid fa-users"></i>
                                    <span>{employer.companySize.size}</span>
                                </div>
                                <div className="single-detail">
                                    <i className="fa-solid fa-location-crosshairs"></i>
                                    <span>{employer.city.name}</span>
                                </div>
                            </div>
                            <Badge>{`Total Jobs - ${employer.jobs_count}`}</Badge>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className="actions">
                        <button className="btn btn-primary">
                            Send private message
                        </button>
                        <button className="btn btn-secondary">
                            <i className="fa-regular fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </ViewPage.Header>
            <ViewPage.Main>
                <div className="row">
                    <div className="col-8">
                        <div className="inner-col-wrapper">
                            <div className="single-info-section">
                                <h3>About company</h3>
                                <p>{employer.about}</p>
                            </div>
                            {employer.last_jobs.length > 0 && (
                                <div className="related-items-section">
                                    <h4>Last Posted Jobs</h4>
                                    <ul>
                                        {employer.last_jobs.map((singleJob) => (
                                            <SingleJobCard
                                                key={singleJob.id}
                                                job={singleJob}
                                                showFeaturedBadge={true}
                                                showSalary={true}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-4">
                        <OverviewSidebarCard employer={employer} />
                    </div>
                </div>
            </ViewPage.Main>
        </ViewPage>
    );
};

export default EmplyerView;
