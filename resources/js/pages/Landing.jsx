import { Fragment, useEffect } from "react";
import FeaturedJobs from "../components/Landing/FeaturedJobs";
import Intro from "../components/Landing/Intro";
import PopularJobCategories from "../components/Landing/PopularJobCategories";
import TopCompanies from "../components/Landing/TopCompanies";
import PricingPlans from "../components/Landing/PricingPlans";
import { useDispatch, useSelector } from "react-redux";
import { loadLandingData } from "../store/thunks/landing";
import Fade from "../components/Animations/Fade";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Landing = () => {
    const isLoaded = useSelector((state) => state.landing.isLoaded);
    const isLoading = useSelector((state) => state.landing.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoaded === false) {
            dispatch(loadLandingData());
        }
    }, []);

    return (
        <Fragment>
            <Intro />
            {isLoading && (
                <div className="relative min-h-screen-height">
                    <Fade isVisible={isLoading}>
                        <LoadingSpinner />
                    </Fade>
                </div>
            )}
            {!isLoading && (
                <Fragment>
                    <PopularJobCategories />
                    <FeaturedJobs />
                    <TopCompanies />
                </Fragment>
            )}
            <PricingPlans />
        </Fragment>
    );
};

export default Landing;
