import { Fragment } from "react";
import FeaturedJobs from "../components/Landing/FeaturedJobs";
import Intro from "../components/Landing/Intro";
import PopularJobCategories from "../components/Landing/PopularJobCategories";

const Landing = () => {
    return (
        <Fragment>
            <Intro />
            <PopularJobCategories />
            <FeaturedJobs />
        </Fragment>
    );
};

export default Landing;
