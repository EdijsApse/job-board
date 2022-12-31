import image from "../../components/assets/test-logo.png";
import jobTestImage from "../../components/assets/job-test-image.jpg";
import Badge from "../../components/UI/Badge";
import Wrapper from "../../components/UI/Wrapper";
import SingleJobCard from "../../components/Job/SingleJobCard";

const job = {
    image: image,
    title: "Junior Graphic Designer (Web)",
    category: "Design",
    location: "New York",
    created: "June 20, 2021",
    salary: "$150 - $180 / week",
    employment: "Full Time",
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    responsibilities: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    ],
    experience_required: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    ],
    skills: ["PHP", "JavaScript", "Design", "Developer"],
    photos: [jobTestImage, jobTestImage, jobTestImage, jobTestImage],
    expiration_date: "May 6, 2026",
    experience: "4 Year",
    qualification: "Bachelor Degree",
    is_featured: true,
    is_urgent: true,
    employer: {
        id: "",
        name: "Employer",
        category: "Developer",
        founded: "2005",
        location: "New York",
        phone: "123 456 7890",
        email: "email@example.com",
        logo: image,
    },
};

const related_jobs = [
    {
        id: 7,
        title: "UX/UI Designer Web",
        category: "Design, Development",
        location: "Paris",
        employment: "Freelance",
        is_urgent: true,
        is_featured: true,
        image: image,
        salary: "$150 - $180 / week",
    },
    {
        id: 8,
        title: "Executive, HR Operations",
        category: "Customer, Marketing",
        location: "New York",
        employment: "Temporary",
        is_urgent: false,
        is_featured: true,
        image: image,
        salary: "$150 - $180 / week",
    },
    {
        id: 9,
        title: "Senior/ Staff Nurse",
        category: "Health and Care",
        location: "Paris",
        employment: "part Time",
        is_urgent: true,
        image: image,
        salary: "$150 - $180 / week",
    },
];

const JobView = () => {
    return (
        <div className="view-page single-job-page">
            <div className="container-fluid bg-pale-gray">
                <div className="view-page-header">
                    <Wrapper className={"single-job-header-wrapper"}>
                        <div className="single-job-card">
                            <div className="job-header">
                                <div className="job-image">
                                    <img
                                        src={job.image}
                                        alt={`${job.title} image`}
                                    />
                                </div>
                                <div className="job-info">
                                    <h1 className="view-page-title">
                                        {job.title}
                                    </h1>
                                    <div className="job-details">
                                        <div className="single-detail">
                                            <i className="fa-solid fa-briefcase"></i>
                                            <span>{job.category}</span>
                                        </div>
                                        <div className="single-detail">
                                            <i className="fa-solid fa-location-crosshairs"></i>
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="single-detail">
                                            <i className="fa-solid fa-money-bill-wave"></i>
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>
                                    <div className="job-badges">
                                        <Badge>{job.employment}</Badge>
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
                                    <div className="single-info-section">
                                        <h3>Skill & Experience</h3>
                                        <ul>
                                            {job.experience_required.map(
                                                (exp, index) => (
                                                    <li key={index}>{exp}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="single-info-section">
                                        <h3>Photos</h3>
                                        <div className="job-photos-list">
                                            {job.photos.map((photo, index) => {
                                                return (
                                                    <div
                                                        className="photo"
                                                        key={index}
                                                    >
                                                        <img
                                                            src={photo}
                                                            alt={job.title}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
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
                                            <span>{job.location}</span>
                                        </div>
                                    </div>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-money-bill"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Offered Salary</h6>
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-briefcase"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Employment Type</h6>
                                            <span>{job.employment}</span>
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
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-user-tie"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Experience</h6>
                                            <span>{job.experience}</span>
                                        </div>
                                    </div>
                                    <div className="single-detail">
                                        <div className="icon">
                                            <i className="fa-solid fa-graduation-cap"></i>
                                        </div>
                                        <div className="info">
                                            <h6>Qualification</h6>
                                            <span>{job.qualification}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-card job-skills">
                                    <h3>Job Skills</h3>
                                    <ul>
                                        {job.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar-card job-employer">
                                    <div className="job-employer-header">
                                        <div className="image">
                                            <img
                                                src={job.employer.logo}
                                                alt={job.employer.title}
                                            />
                                        </div>
                                        <div className="info">
                                            <h5>{job.employer.name}</h5>
                                            <a href="">View Company Profile</a>
                                        </div>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Category</h6>
                                        <p>{job.employer.category}</p>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Founded Date</h6>
                                        <p>{job.employer.founded}</p>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Location</h6>
                                        <p>{job.employer.location}</p>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Phone Number</h6>
                                        <p>{job.employer.phone}</p>
                                    </div>
                                    <div className="single-company-detail">
                                        <h6>Email</h6>
                                        <p>{job.employer.email}</p>
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
