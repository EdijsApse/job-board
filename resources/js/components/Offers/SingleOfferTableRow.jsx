import { NavLink } from "react-router-dom";
import placeholderImage from "../assets/placeholder-image.png";

const SingleOfferTableRow = ({ offer }) => {
    const img = offer.job.image ?? placeholderImage;
    return (
        <tr key={offer.id}>
            <td>
                <div className="job-cell">
                    <div className="image">
                        <img src={img} alt={offer.job.jobtitle} />
                    </div>
                    <div className="details">
                        <NavLink className="link" to={`/jobs/${offer.job.id}`}>
                            {offer.job.jobtitle}
                        </NavLink>
                        <div className="details-list">
                            <div className="single-detail">
                                <i className="fa-solid fa-briefcase"></i>
                                <span>{offer.job.category.name}</span>
                            </div>
                            <div className="single-detail">
                                <i className="fa-solid fa-location-crosshairs"></i>
                                <span>{offer.job.city.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <td>{offer.created}</td>
            <td className={offer.status_name.toLowerCase()}>
                {offer.status_name}
            </td>
            <td>
                <div className="actions">
                    <button className="btn btn-secondary btn-sm">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button className="btn btn-secondary btn-sm">
                        <i className="fa-solid fa-eye"></i>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default SingleOfferTableRow;
