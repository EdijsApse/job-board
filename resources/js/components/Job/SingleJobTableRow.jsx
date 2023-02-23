import { NavLink } from "react-router-dom";
import placeholderImage from "../assets/placeholder-image.png";

const SingleJobTableRow = ({ job }) => {
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
            <td>{job.created}</td>
            <td>
                <div className="actions">
                    <NavLink
                        className="btn btn-secondary btn-sm"
                        to={`/jobs/${job.id}/edit`}
                    >
                        <i className="fa-solid fa-pencil"></i>
                    </NavLink>
                    <NavLink
                        className="btn btn-secondary btn-sm"
                        to={`/jobs/${job.id}`}
                    >
                        <i className="fa-solid fa-eye"></i>
                    </NavLink>
                </div>
            </td>
        </tr>
    );
};

export default SingleJobTableRow;
