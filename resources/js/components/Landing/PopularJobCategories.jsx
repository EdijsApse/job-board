import { useSelector } from "react-redux";
import Wrapper from "../UI/Wrapper";
import SinglePopularCategory from "./SinglePopularCategory";

const PopularJobCategories = () => {
    const categories = useSelector((state) => state.landing.categories);
    const jobOpenings = useSelector((state) => state.landing.jobOpenings);

    if (!categories.length) {
        return;
    }

    return (
        <Wrapper className="landing-section popular-job-categories">
            <h2 className="section-title">Popular job categories</h2>
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
        </Wrapper>
    );
};

export default PopularJobCategories;
