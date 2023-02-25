import { useState } from "react";
import { NavLink } from "react-router-dom";
import placeholderImage from "../assets/placeholder-image.png";
import ConfirmationModal from "../UI/ConfirmationModal";
import Fade from "../Animations/Fade";

const SingleApplicationTableRowForEmployer = ({ application }) => {
    const { candidate, job } = application;
    const img = candidate.profile.image ?? placeholderImage;
    const candidateFullName = `${candidate.profile.name} ${candidate.profile.surname}`;
    let jobtitle = job.jobtitle;
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] =
        useState();
    if (candidate && candidate.basic_resume_details) {
        jobtitle = candidate.basic_resume_details.jobtitle;
    }
    return (
        <tr>
            <td>
                <div className="details-cell">
                    <div className="image">
                        <img src={img} alt={candidateFullName} />
                    </div>
                    <div className="details">
                        <NavLink
                            className="link"
                            to={`/candidates/${candidate.id}`}
                        >
                            {candidateFullName}
                        </NavLink>
                        <NavLink
                            className="secondary-link link"
                            to={`/jobs/${job.id}`}
                        >
                            <span className="dark">Applied to - </span>
                            {job.jobtitle}
                        </NavLink>
                        <div className="details-list">
                            <div className="single-detail">
                                <i className="fa-solid fa-briefcase"></i>
                                <span>{jobtitle}</span>
                            </div>
                            <div className="single-detail">
                                <i className="fa-solid fa-location-crosshairs"></i>
                                <span>{job.city.name}</span>
                            </div>
                        </div>
                        {application.cover_letter && (
                            <p className="cover-letter">
                                {application.cover_letter}
                            </p>
                        )}
                    </div>
                </div>
            </td>
            <td>{application.created}</td>
            <td className={application.status_name.toLowerCase()}>
                {application.status_name}
            </td>
            <td>
                <div className="actions">
                    <Fade isVisible={isConfirmationModalVisible}>
                        <ConfirmationModal
                            message="Are you sure you want to approve this
                                application?"
                            onCancel={() => {
                                setIsConfirmationModalVisible(false);
                            }}
                            onApprove={() => {
                                alert('Approved')
                            }}
                        />
                    </Fade>
                    <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => {
                            setIsConfirmationModalVisible(true);
                        }}
                    >
                        <i className="fa-solid fa-check"></i>
                    </button>
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

export default SingleApplicationTableRowForEmployer;
