import Wrapper from "../UI/Wrapper";
import SingleFeaturedJob from "../Job/Item";
import placeholderImage from "../assets/test-logo.png";

const jobs = [
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

const FeaturedJobs = () => {
    return (
        <Wrapper className={"landing-section featured-jobs"}>
            <h2 className="section-title">Featured Jobs</h2>
            <p className="section-subtitle">
                Know your worth and find the job that qualify your life
            </p>
            <ul className="featured-jobs">
                {jobs.map((job) => {
                    return <SingleFeaturedJob key={job.id} job={job} />;
                })}
            </ul>
            <button className="btn btn-primary mt-6">Load more listing</button>
        </Wrapper>
    );
};

export default FeaturedJobs;
