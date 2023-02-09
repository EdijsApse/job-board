import { NavLink } from "react-router-dom";
import placeholderImage from "../assets/placeholder-image.png";

const InfoSidebarCard = ({ company }) => {
    
    const companyLogo = company.logo ?? placeholderImage;

    return (
        <div className="sidebar-card item-info-card">
            <div className="item-header">
                <div className="image">
                    <img src={companyLogo} alt={company.name} />
                </div>
                <div className="header-details">
                    <h5>{company.name}</h5>
                    <NavLink to={`/employers/${company.id}`}>
                        View Company Profile
                    </NavLink>
                </div>
            </div>
            <div className="single-detail">
                <h6>Category</h6>
                <p>{company.category.name}</p>
            </div>
            {company.year_founded != null && (
                <div className="single-detail">
                    <h6>Founded Date</h6>
                    <p>{company.year_founded}</p>
                </div>
            )}
            <div className="single-detail">
                <h6>Location</h6>
                <p>{company.city.name}</p>
            </div>
            <div className="single-detail">
                <h6>Phone Number</h6>
                <p>{company.contact_phone}</p>
            </div>
            <div className="single-detail">
                <h6>Email</h6>
                <p>{company.contact_email}</p>
            </div>
            <button className="btn btn-secondary">Contact company</button>
        </div>
    );
};

export default InfoSidebarCard;
