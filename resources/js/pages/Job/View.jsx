import placeholderImage from "../../components/assets/test-logo.png";
import Badge from "../../components/UI/Badge";
import Wrapper from "../../components/UI/Wrapper";
import SingleJobCard from "../../components/Job/Item";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useCallback } from "react";
import axios from "../../axios";
import { useState } from "react";
import { alertActions } from "../../store/slices/alert";

const related_jobs = [
    {
        id: 7,
        jobtitle: "UX/UI Designer Web",
        category: { name: "Design, Development" },
        city: {name: "Paris"},
        location: "Paris",
        salary_type: {name: 'Hourly'},
        employment_type: {name: 'Part-Time'},
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
        city: {name: "New York"},
        location: "New York",
        salary_type: {name: 'Hourly'},
        employment_type: {name: 'Part-Time'},
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
        city: {name: "Paris"},
        location: "Paris",
        salary_type: {name: 'Hourly'},
        employment_type: {name: 'Part-Time'},
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
            <div className="view-page single-job-page min-h-50 relative">
                <LoadingSpinner />
            </div>
        );
    }

    const image = job.image ?? placeholderImage;
    const companyLogo = job.company.logo ?? placeholderImage;
    const location = `${job.city.name} - ${job.street}`;
    const salary = `${job.min_salary} - ${job.max_salary} / ${job.salary_type.name}`;
    
    return (
        <div className="view-page single-job-page">
            <div className="container-fluid bg-pale-gray">
                <div className="view-page-header">
                    <Wrapper className={"single-job-header-wrapper"}>
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
                                    <div className="job-details">
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
                                        <Badge>
                                            {job.employment_type.name}
                                        </Badge>
                                        {job.is_urgent && (
                                            <Badge className="orange">
                                                Urgent
                                            </Badge>
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
                        <div className="apply-action">
                            <p className="expiration-date">
                                Application ends:
                                <span className="danger">
                                    {job.expiration_date}
                                </span>
                            </p>
                            <div className="actions">
                                <button className="btn btn-primary">
                                    Apply Now
                                </button>
                                <button className="btn btn-secondary">
                                    <i className="fa-regular fa-bookmark"></i>
                                </button>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </div>
            <div className="container-fluid bg-white">
                <main className="view-page-main">
                    <Wrapper>
                        <div className="row">
                            <div className="col-8">
                                <div className="job-full-info">
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
                                                        <li key={index}>
                                                            {resp}
                                                        </li>
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
                                                        <li key={index}>
                                                            {exp}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="related-jobs">
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

                            <div className="col-4">
                                <div className="sidebar-card job-overview">
                                    <h3>Job Overview</h3>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-regular fa-calendar"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Date Posted</h6>
                                            <span>{job.created}</span>
                                        </div>
                                    </div>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Location</h6>
                                            <span>{location}</span>
                                        </div>
                                    </div>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-money-bill"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Offered Salary</h6>
                                            <span>{salary}</span>
                                        </div>
                                    </div>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-briefcase"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Employment Type</h6>
                                            <span>
                                                {job.employment_type.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-business-time"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Expiration date</h6>
                                            <span>{job.expiration_date}</span>
                                        </div>
                                    </div>
                                    {job.years_of_experience_required !=
                                        null && (
                                        <div className="single-detail">
                                            <div className="icon">
                                                <i className="fa-solid fa-user-tie"></i>
                                            </div>
                                            <div className="info">
                                                <h6>Experience</h6>
                                                <span>
                                                    {
                                                        job.years_of_experience_required
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="sidebar-card job-employer">
                                    <div className="job-employer-header">
                                        <div className="image">
                                            <img
                                                src={companyLogo}
                                                alt={job.company.name}
                                            />
                                        </div>
                                        <div className="info">
                                            <h5>{job.company.name}</h5>
                                            <a href="">View Company Profile</a>
                                        </div>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Category</h6>
                                        <p>{job.company.category.name}</p>
                                    </div>
                                    {job.company.year_founded != null && (
                                        <div className="single-company-detail">
                                            <h6>Founded Date</h6>
                                            <p>{job.company.year_founded}</p>
                                        </div>
                                    )}
                                    <div className="single-company-detail">
                                        <h6>Location</h6>
                                        <p>{job.company.city.name}</p>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Phone Number</h6>
                                        <p>{job.company.contact_phone}</p>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Email</h6>
                                        <p>{job.company.contact_email}</p>
                                    </div>
                                    <button className="btn btn-secondary">
                                        Contact company
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </main>
            </div>
        </div>
    );
};

export default JobView;
