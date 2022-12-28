import { Fragment } from "react";
import FeaturedJobs from "../components/Landing/FeaturedJobs";
import Intro from "../components/Landing/Intro";
import PopularJobCategories from "../components/Landing/PopularJobCategories";
import TopCompanies from "../components/Landing/TopCompanies";

const Landing = () => {
    return (
        <Fragment>
            <Intro />
            <PopularJobCategories />
            <FeaturedJobs />
            <TopCompanies />
        </Fragment>
    );
};

export default Landing;
