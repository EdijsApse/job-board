import Card from "../UI/Card";
import placeholder from "../../components/assets/test-logo.png";
import { NavLink } from "react-router-dom";

const ListItem = ({ candidate }) => {
    const { profile, basic_resume_details, salary } = candidate;
    const image = (profile && profile.image) ?? placeholder;
    let fullName = "";
    if (profile) {
        fullName = `${profile.name} ${profile.surname}`;
    }

    let detailsList = "";

    let basicDetails = "";
    let salaryDetails = "";

    if (basic_resume_details) {
        basicDetails = (
            <div className="single-detail">
                <i className="fa-solid fa-briefcase"></i>
                <span>{basic_resume_details.category.name}</span>
            </div>
        );
    }

    if (salary) {
        salaryDetails = (
            <div className="single-detail">
                <i className="fa-solid fa-coins"></i>
                <span>{`${salary.min_salary} - ${salary.max_salary} $ / ${salary.type.name}`}</span>
            </div>
        );
    }

    if (basicDetails || salaryDetails) {
        detailsList = (
            <div className="details-list">
                {basicDetails}
                {salaryDetails}
            </div>
        );
    }

    return (
        <Card className="single-candidate-card" listTag={true}>
            <div className="candidate-info">
                <div className="candidate-image">
                    <img src={image} alt={fullName} />
                </div>
                <div className="candidate-details">
                    <h3>{fullName}</h3>
                    {basic_resume_details && <h4 className="candidate-jobtitle">{basic_resume_details.jobtitle}</h4>}
                    {detailsList}
                </div>
            </div>
            <NavLink
                to={`/candidates/${candidate.id}`}
                className="btn btn-secondary"
            >
                View Profile
            </NavLink>
        </Card>
    );
};

export default ListItem;
