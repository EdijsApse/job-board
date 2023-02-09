import Wrapper from "../UI/Wrapper";
import SingleFeaturedJob from "../Job/Item";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const FeaturedJobs = () => {
    const featuredJobsList = useSelector((state) => state.landing.featuredJobs);

    if (!featuredJobsList.length) {
        return;
    }

    return (
        <Wrapper className={"landing-section featured-jobs"}>
            <h2 className="section-title">Featured Jobs</h2>
            <p className="section-subtitle">
                Know your worth and find the job that qualify your life
            </p>
            <ul className="featured-jobs">
                {featuredJobsList.map((job) => {
                    return <SingleFeaturedJob key={job.id} job={job} />;
                })}
            </ul>
            <NavLink to="/jobs" className="btn btn-primary mt-6">
                Load more listing
            </NavLink>
        </Wrapper>
    );
};

export default FeaturedJobs;
