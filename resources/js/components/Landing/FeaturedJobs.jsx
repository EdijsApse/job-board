import Wrapper from "../UI/Wrapper";
import SingleFeaturedJob from "./SingleFeaturedJob";
import logo from "./test-logo.png";

const jobs = [
    {
        id: 1,
        title: "Junior Graphic Designer (Web)",
        category: "Design, Development",
        location: "New York",
        employment: "Full Time",
        is_urgent: true,
        image: logo,
    },
    {
        id: 2,
        title: "Finance Manager & Health",
        category: "Design",
        location: "New York",
        employment: "Full Time",
        is_urgent: true,
        image: logo,
    },
    {
        id: 3,
        title: "General Ledger Accountant",
        category: "Design, Marketing",
        location: "New York",
        employment: "Full Time",
        is_urgent: false,
        image: logo,
    },
    {
        id: 4,
        title: "Assistant / Store Keeper",
        category: "Automotive Jobs, Marketing",
        location: "New York",
        employment: "Full Time",
        is_urgent: false,
        image: logo,
    },
    {
        id: 5,
        title: "Group Marketing Manager",
        category: "Customer, Marketing",
        location: "Miami",
        employment: "Part Time",
        is_urgent: false,
        image: logo,
    },
    {
        id: 6,
        title: "Product Sales Specialist",
        category: "Project Management",
        location: "New York",
        employment: "Internship",
        is_urgent: false,
        image: logo,
    },
    {
        id: 7,
        title: "UX/UI Designer Web",
        category: "Design, Development",
        location: "Paris",
        employment: "Freelance",
        is_urgent: false,
        image: logo,
    },
    {
        id: 8,
        title: "Executive, HR Operations",
        category: "Customer, Marketing",
        location: "New York",
        employment: "Temporary",
        is_urgent: false,
        image: logo,
    },
    {
        id: 9,
        title: "Senior/ Staff Nurse",
        category: "Health and Care",
        location: "Paris",
        employment: "part Time",
        is_urgent: false,
        image: logo,
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
