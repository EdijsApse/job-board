import Wrapper from "../UI/Wrapper";
import SinglePopularCategory from "./SinglePopularCategory";

const tempList = [
    {
        id: 1,
        title: "Accounting / Finance",
        icon_class: "fa-solid fa-coins",
        position: 1,
    },
    {
        id: 2,
        title: "Marketing",
        icon_class: "fa-solid fa-chart-simple",
        position: 12,
    },
    {
        id: 3,
        title: "Design",
        icon_class: "fa-solid fa-pen-nib",
        position: 20,
    },
    {
        id: 4,
        title: "Development",
        icon_class: "fa-solid fa-code",
        position: 6,
    },
    {
        id: 5,
        title: "Project management",
        icon_class: "fa-solid fa-list-check",
        position: 1,
    },
    {
        id: 6,
        title: "Custom service",
        icon_class: "fa-solid fa-bell-concierge",
        position: 1,
    },
    {
        id: 7,
        title: "Health and Care",
        icon_class: "fa-solid fa-briefcase-medical",
        position: 3,
    },
    {
        id: 8,
        title: "Automative jobs",
        icon_class: "fa-solid fa-house",
        position: 1,
    },
];

const PopularJobCategories = () => {
    return (
        <Wrapper className="popular-job-categories">
            <h2>Popular job categories</h2>
            <p>2020 jobs live – 293 added today.</p>
            <ul>
                {tempList.map((category) => (
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
