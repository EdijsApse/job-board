import { Fragment } from "react";
import Intro from "../components/Landing/Intro";
import PopularJobCategories from "../components/Landing/PopularJobCategories";

const Landing = () => {
    return (
        <Fragment>
            <Intro />
            <PopularJobCategories />
        </Fragment>
    );
};

export default Landing;
