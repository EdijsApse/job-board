import { NavLink } from "react-router-dom";
import Badge from "../UI/Badge";
import Card from "../UI/Card";
import tempLogo from "../assets/placeholder-image.png";

const ApplicationListItem = ({ application }) => {
    const { job } = application;
    let image = job.image ?? tempLogo;

    return (
        <Card className="single-application-card">
            <div className="application-header">
                <div className="application-image">
                    <img src={image} alt={`${job.jobtitle} image`} />
                </div>
                <div className="application-info">
                    <div className="title-wrapper">
                        <NavLink
                            to={`/jobs/${job.id}`}
                            className="application-link"
                        >
                            {job.jobtitle}
                        </NavLink>
                        <Badge
                            className={application.status_name.toLowerCase()}
                        >
                            {application.status_name}
                        </Badge>
                    </div>
                    <div className="details-list">
                        <div className="single-detail">
                            <i className="fa-solid fa-briefcase"></i>
                            <span>{job.category.name}</span>
                        </div>
                        <div className="single-detail">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <span>{job.city.name}</span>
                        </div>
                        <div className="single-detail">
                            <i className="fa-solid fa-money-bill-wave"></i>
                            <span>{`$${job.min_salary} - $${job.max_salary} / ${job.salary_type.name}`}</span>
                        </div>
                    </div>
                    <div className="application-badges">
                        <Badge>{job.employment_type.name}</Badge>
                        {job.is_urgent && (
                            <Badge className="orange">Urgent</Badge>
                        )}
                        {job.is_featured && (
                            <Badge className="green">Featured</Badge>
                        )}
                    </div>
                    {application.cover_letter && (
                        <p className="cover-letter">
                            {application.cover_letter}
                        </p>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ApplicationListItem;
