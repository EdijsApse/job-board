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
import OverviewSidebarCard from "../../components/Job/OverviewSidebarCard";
import CompanyInfoSidebarCard from "../../components/Employer/InfoSidebarCard";
import ApplyButton from "../../components/Job/ApplyButton";

const related_jobs = [
    {
        id: 7,
        jobtitle: "UX/UI Designer Web",
        category: { name: "Design, Development" },
        city: { name: "Paris" },
        location: "Paris",
        salary_type: { name: "Hourly" },
        employment_type: { name: "Part-Time" },
        employment: "Freelance",
        is_urgent: true,
        is_featured: true,
        image: placeholderImage,
        salary: "$150 - $180 / week",
    },
    {
        id: 8,
        jobtitle: "Executive, HR Operations",
        category: { name: "Customer, Marketing" },
        city: { name: "New York" },
        location: "New York",
        salary_type: { name: "Hourly" },
        employment_type: { name: "Part-Time" },
        employment: "Temporary",
        is_urgent: false,
        is_featured: true,
        image: placeholderImage,
        salary: "$150 - $180 / week",
    },
    {
        id: 9,
        jobtitle: "Senior/ Staff Nurse",
        category: { name: "Health and Care" },
        city: { name: "Paris" },
        location: "Paris",
        salary_type: { name: "Hourly" },
        employment_type: { name: "Part-Time" },
        employment: "part Time",
        is_urgent: true,
        image: placeholderImage,
        salary: "$150 - $180 / week",
    },
];

const JobView = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getSingleJob = useCallback(() => {
        setIsLoading(true);
        axios
            .get(`/job/${id}`)
            .then((res) => {
                const { job } = res.data;
                setJob(job);
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
        getSingleJob();
    }, [getSingleJob]);

    if (isLoading) {
        return (
            <ViewPage className="single-job-page min-h-50 relative">
                <LoadingSpinner />
            </ViewPage>
        );
    }

    const image = job.image ?? placeholderImage;
    const location = `${job.city.name} - ${job.street}`;
    const salary = `${job.min_salary} - ${job.max_salary} / ${job.salary_type.name}`;

    return (
        <ViewPage className="single-job-page">
            <ViewPage.Header>
                <div className="left-col">
                    <div className="single-job-card">
                        <div className="job-header">
                            <div className="job-image">
                                <img
                                    src={image}
                                    alt={`${job.jobtitle} image`}
                                />
                            </div>
                            <div className="job-info">
                                <h1 className="view-page-title">
                                    {job.jobtitle}
                                </h1>
                                <div className="details-list">
                                    <div className="single-detail">
                                        <i className="fa-solid fa-briefcase"></i>
                                        <span>{job.category.name}</span>
                                    </div>
                                    <div className="single-detail">
                                        <i className="fa-solid fa-location-crosshairs"></i>
                                        <span>{location}</span>
                                    </div>
                                    <div className="single-detail">
                                        <i className="fa-solid fa-money-bill-wave"></i>
                                        <span>{salary}</span>
                                    </div>
                                </div>
                                <div className="job-badges">
                                    <Badge>{job.employment_type.name}</Badge>
                                    {job.is_urgent && (
                                        <Badge className="orange">Urgent</Badge>
                                    )}
                                    {job.is_featured && (
                                        <Badge className="green">
                                            Featured
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <p className="text-right">
                        Application ends:
                        <span className="text-danger">
                            {job.expiration_date}
                        </span>
                    </p>
                    <div className="actions">
                        <ApplyButton job={job} />
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
                                <h3>Job Description</h3>
                                <p>{job.description}</p>
                            </div>
                            {job.responsibilities && (
                                <div className="single-info-section">
                                    <h3>Key Responsibilities</h3>
                                    <ul>
                                        {job.responsibilities.map(
                                            (resp, index) => (
                                                <li key={index}>{resp}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                            {job.requirements && (
                                <div className="single-info-section">
                                    <h3>Requirements</h3>
                                    <ul>
                                        {job.requirements.map(
                                            (exp, index) => (
                                                <li key={index}>{exp}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                            <div className="related-items-section">
                                <h4>Related jobs</h4>
                                <ul>
                                    {related_jobs.map((singleJob) => (
                                        <SingleJobCard
                                            key={singleJob.id}
                                            job={singleJob}
                                            showFeaturedBadge={true}
                                            showSalary={true}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <OverviewSidebarCard job={job} />
                        <CompanyInfoSidebarCard company={job.company} />
                    </div>
                </div>
            </ViewPage.Main>
        </ViewPage>
    );
};

export default JobView;
