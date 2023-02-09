import Card from "../UI/Card";
import placeholder from "../../components/assets/placeholder-image.png";
import { NavLink } from "react-router-dom";

const SingleTopCompany = ({ company }) => {
    const logo = company.logo ?? placeholder;

    return (
        <Card className="single-top-company">
            <div className="company-logo">
                <img src={logo} alt={`${company.title} logo`} />
            </div>
            <h5>{company.title}</h5>
            <p>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>{company.city.name}</span>
            </p>
            <NavLink
                to={`/employers/${company.id}`}
                className="btn btn-secondary"
            >{`Open Jobs - ${company.jobs_count}`}</NavLink>
        </Card>
    );
};

export default SingleTopCompany;
