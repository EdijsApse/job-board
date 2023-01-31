import Badge from "../UI/Badge";
import Card from "../UI/Card";
import placeholder from "../../components/assets/test-logo.png";
import { NavLink } from "react-router-dom";

const ListItem = ({ employer }) => {
    const logo = employer.logo ?? placeholder;
    return (
        <Card className="single-employer-card" listTag={true}>
            <div className="employer-info">
                <div className="employer-logo">
                    <img src={logo} alt={employer.name} />
                </div>
                <div className="employer-details">
                    <NavLink to={`/employers/${employer.id}`}>
                        {employer.name}
                    </NavLink>
                    <div className="single-detail">
                        <i className="fa-solid fa-location-crosshairs"></i>
                        <span>{employer.city.name}</span>
                    </div>
                </div>
            </div>
            <Badge>{`Total Jobs - ${employer.jobs_count}`}</Badge>
            <span className="btn-icon">
                <i className="fa-regular fa-bookmark"></i>
            </span>
        </Card>
    );
};

export default ListItem;
