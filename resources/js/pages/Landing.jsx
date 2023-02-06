import { Fragment, useEffect } from "react";
import FeaturedJobs from "../components/Landing/FeaturedJobs";
import Intro from "../components/Landing/Intro";
import PopularJobCategories from "../components/Landing/PopularJobCategories";
import TopCompanies from "../components/Landing/TopCompanies";
import PricingPlans from "../components/Landing/PricingPlans";
import { useDispatch, useSelector } from "react-redux";
import { loadLandingData } from "../store/thunks/landing";

const Landing = () => {
    const isLoaded = useSelector((state) => state.landing.isLoaded);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isLoaded === false) {
            dispatch(loadLandingData());
        }
    }, []);

    return (
        <Fragment>
            <Intro />
            <PopularJobCategories />
            <FeaturedJobs />
            <TopCompanies />
            <PricingPlans />
        </Fragment>
    );
};

export default Landing;
