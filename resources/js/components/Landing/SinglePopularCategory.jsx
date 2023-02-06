import { NavLink } from "react-router-dom";
import Card from "../UI/Card";

const SinglePopularCategory = ({ category }) => {
    const positionText =
        category.job_count > 1
            ? `${category.job_count} open positions`
            : `${category.job_count} open position`;
    return (
        <Card listTag={true}>
            <NavLink to={`/jobs?category_id=${category.id}`} className="single-popular-category">
                <div className="category-icon">
                    <i className={`custom-icon ${category.css_class_name}`}></i>
                </div>
                <h5>{category.name}</h5>
                <p>({positionText})</p>
            </NavLink>
        </Card>
    );
};

export default SinglePopularCategory;
