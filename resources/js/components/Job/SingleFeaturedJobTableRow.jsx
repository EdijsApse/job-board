import { NavLink } from "react-router-dom";
import placeholderImage from "../assets/placeholder-image.png";

const SingleFeaturedJobTableRow = ({ job }) => {
    const img = job.image ?? placeholderImage;
    return (
        <tr>
            <td>
                <div className="details-cell">
                    <div className="image">
                        <img src={img} alt={job.jobtitle} />
                    </div>
                    <div className="details">
                        <NavLink className="link" to={`/jobs/${job.id}`}>
                            {job.jobtitle}
                        </NavLink>
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
                    </div>
                </div>
            </td>
            <td>
                <div className="actions">
                    <button className="btn btn-secondary btn-sm">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default SingleFeaturedJobTableRow;
