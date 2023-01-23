import { NavLink } from "react-router-dom";
import Badge from "../UI/Badge";
import Card from "../UI/Card";
import tempLogo from "../assets/test-logo.png";

const Item = ({
    job,
    showSalary = false,
    squareImage = false,
    showFeaturedBadge = false,
}) => {
    let image = job.image ?? tempLogo;
    return (
        <Card className="single-job-card" listTag={true}>
            <div className="job-header">
                <div
                    className={`job-image ${squareImage ? "square-image" : ""}`}
                >
                    <img src={image} alt={`${job.jobtitle} image`} />
                </div>
                <div className="job-info">
                    <NavLink to={`/jobs/${job.id}`} className="job-link">
                        {job.jobtitle}
                    </NavLink>
                    <div className="job-details">
                        <div className="single-detail">
                            <i className="fa-solid fa-briefcase"></i>
                            <span>{job.category.name}</span>
                        </div>
                        <div className="single-detail">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <span>{job.city.name}</span>
                        </div>
                        {showSalary && (
                            <div className="single-detail">
                                <i className="fa-solid fa-money-bill-wave"></i>
                                <span>{`$${job.min_salary} - $${job.max_salary} / ${job.salary_type.name}`}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="job-badges">
                <Badge>{job.employment_type.name}</Badge>
                {job.is_urgent && <Badge className="orange">Urgent</Badge>}
                {showFeaturedBadge && job.is_featured && (
                    <Badge className="green">Featured</Badge>
                )}
            </div>
            <span className="btn-icon">
                <i className="fa-regular fa-bookmark"></i>
            </span>
        </Card>
    );
};

export default Item;
