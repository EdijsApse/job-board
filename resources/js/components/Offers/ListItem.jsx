import { NavLink } from "react-router-dom";
import Badge from "../UI/Badge";
import Card from "../UI/Card";
import tempLogo from "../assets/placeholder-image.png";

const OfferListItem = ({ offer }) => {
    const { job, candidate } = offer;
    let candidateFullName = '';
    let candidateImage = tempLogo;

    if (candidate.profile) {
        candidateFullName = `- ${candidate.profile.name} ${candidate.profile.surname}`;
        candidateImage = candidate.profile.image ?? candidateImage;
    }

    return (
        <Card className="single-offer-card">
            <div className="offer-header">
                <div className="offer-image">
                    <img src={candidateImage} alt={`${job.jobtitle} image`} />
                </div>
                <div className="offer-info">
                    <div className="title-wrapper">
                        <NavLink
                            to={`/offers/${offer.id}`}
                            className="offer-link"
                        >
                            {job.jobtitle} {candidateFullName}
                        </NavLink>
                        <Badge
                            className={offer.status_name.toLowerCase()}
                        >
                            {offer.status_name}
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
                    </div>
                    <div className="offer-badges">
                        <Badge>{job.employment_type.name}</Badge>
                        {job.is_urgent && (
                            <Badge className="orange">Urgent</Badge>
                        )}
                        {job.is_featured && (
                            <Badge className="green">Featured</Badge>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default OfferListItem;
