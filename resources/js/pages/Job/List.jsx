import Wrapper from "../../components/UI/Wrapper";
import logo from "../../components/assets/test-logo.png";
import SingleFeaturedJob from "../../components/Job/SingleJobCard";
import Filters from "../../components/Job/Filters";
import Pagination from "../../components/UI/Pagination";
import SortInputs from "../../components/Job/SortInputs";
import BreadCrumbs from "../../components/UI/Breadcrumbs";

const temp_jobs = [
    {
        id: 1,
        title: "Junior Graphic Designer (Web)",
        category: "Design, Development",
        location: "New York",
        employment: "Full Time",
        is_urgent: true,
        image: logo,
        is_featured: true
    },
    {
        id: 2,
        title: "Finance Manager & Health",
        category: "Design",
        location: "New York",
        employment: "Full Time",
        is_urgent: true,
        image: logo,
        is_featured: true
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

const JobList = () => {
    return (
        <div className="page">
            <div className="page-header">
                <h1>Jobs</h1>
                <BreadCrumbs />
            </div>
            <main className="container-fluid">
                <Wrapper>
                    <div className="row">
                        <div className="col-4">
                            <div className="page-filters">
                                <Filters />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="sort-container">
                                <span>Showing 1 – 10 of 18 results</span>
                                <div className="sort-inputs">
                                    <SortInputs />
                                </div>
                            </div>
                            <ul className="jobs-list">
                                {temp_jobs.map((job) => (
                                    <SingleFeaturedJob
                                        key={job.id}
                                        job={job}
                                        showSalary={true}
                                        showFeaturedBadge={true}
                                        squareImage={true}
                                    />
                                ))}
                            </ul>
                            <Pagination />
                        </div>
                    </div>
                </Wrapper>
            </main>
        </div>
    );
};

export default JobList;
