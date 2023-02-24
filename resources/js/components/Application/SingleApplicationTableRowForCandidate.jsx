import { NavLink } from "react-router-dom";
import placeholderImage from "../assets/placeholder-image.png";

const SingleApplicationTableRowForCandidate = ({ application }) => {
    const { job } = application;
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
            <td>{application.created}</td>
            <td className={application.status_name.toLowerCase()}>
                {application.status_name}
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

export default SingleApplicationTableRowForCandidate;
