import { Fragment } from "react";
import { useSelector } from "react-redux";
import Fade from "../Animations/Fade";
import LoadingSpinner from "../UI/LoadingSpinner";
import Wrapper from "../UI/Wrapper";
import SinglePopularCategory from "./SinglePopularCategory";

const PopularJobCategories = () => {
    const isLoading = useSelector((state) => state.landing.isLoading);
    const categories = useSelector((state) => state.landing.categories);
    const jobOpenings = useSelector((state) => state.landing.jobOpenings);

    return (
        <Wrapper className="landing-section popular-job-categories">
            <h2 className="section-title">Popular job categories</h2>
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            {!isLoading && (
                <Fragment>
                    <p className="section-subtitle">
                        Total job openings - {jobOpenings}.
                    </p>
                    <ul>
                        {categories.map((category) => (
                            <SinglePopularCategory
                                key={category.id}
                                category={category}
                            />
                        ))}
                    </ul>
                </Fragment>
            )}
        </Wrapper>
    );
};

export default PopularJobCategories;
