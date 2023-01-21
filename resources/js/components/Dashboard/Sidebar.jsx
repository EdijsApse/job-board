import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import profileImage from "../assets/test-logo.png";
import SidebarLink from "../UI/DashboardSidebarLink";

const Sidebar = () => {
    const user = useSelector((state) => {
        return state.auth.user;
    });

    const location = useLocation();

    const [isResumeDropdownVisible, setIsResumeDropdownVisible] =
        useState(false);

    useEffect(() => {
        if (!location.pathname.includes("/resume")) {
            setIsResumeDropdownVisible(false);
        }
    }, [location]);

    const isEmployer = user && user.is_employer;
    const isCandidate = user && user.is_candidate;

    let profile = null;
    let imgSrc = profileImage;
    const userType = user ? user.user_type_name : "";

    if (user && user.profile) {
        profile = user.profile;
    }

    if (profile && profile.image) {
        imgSrc = profile.image;
    }

    const toggleResumeDropdownVisibility = () => {
        setIsResumeDropdownVisible((oldVisibility) => {
            return !oldVisibility;
        });
    };

    return (
        <aside className="sidebar">
            <div className="dashboard-sidebar">
                {profile && (
                    <div className="sidebar-profile-widget">
                        <div className="profile-image">
                            <img src={imgSrc} alt="Profile image" />
                        </div>
                        <div className="profile-info">
                            <h6>
                                {profile.name} {profile.surname}
                            </h6>
                            <p className="user-type-text">{userType}</p>
                            <NavLink
                                to="/dashboard/profile"
                                className="btn btn-primary"
                            >
                                Edit Profile
                            </NavLink>
                        </div>
                    </div>
                )}
                <ul>
                    <li>
                        <SidebarLink to="/dashboard">
                            <i className="fa-solid fa-table-columns"></i>
                            <span>User Dashboard</span>
                        </SidebarLink>
                    </li>
                    {isEmployer && (
                        <li>
                            <SidebarLink to="/dashboard/company">
                                <i className="fa-solid fa-building"></i>
                                <span>Company Details</span>
                            </SidebarLink>
                        </li>
                    )}
                    <li>
                        <SidebarLink to="/dashboard/profile">
                            <i className="fa-solid fa-user-tie"></i>
                            <span>Profile</span>
                        </SidebarLink>
                    </li>
                    {isCandidate && (
                        <li>
                            <button
                                className={`btn secondary ${
                                    isResumeDropdownVisible ? "active" : ""
                                }`}
                                onClick={toggleResumeDropdownVisibility}
                            >
                                <i className="fa-regular fa-clipboard"></i>
                                <span>My Resume</span>
                            </button>
                            {isResumeDropdownVisible && (
                                <ul className="dropdown-links">
                                    <li>
                                        <SidebarLink to="/dashboard/resume">
                                            <i className="fa-regular fa-clipboard"></i>
                                            <span>Basic Details</span>
                                        </SidebarLink>
                                    </li>
                                    <li>
                                        <SidebarLink to="/dashboard/resume/salary">
                                            <i className="fa-solid fa-coins"></i>
                                            <span>Salary</span>
                                        </SidebarLink>
                                    </li>
                                    <li>
                                        <SidebarLink to="/dashboard/resume/experiences">
                                            <i className="fa-solid fa-briefcase"></i>
                                            <span>Experiences</span>
                                        </SidebarLink>
                                    </li>
                                    <li>
                                        <SidebarLink to="/dashboard/resume/educations">
                                            <i className="fa-solid fa-graduation-cap"></i>
                                            <span>Educations</span>
                                        </SidebarLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                    )}
                    <li>
                        <a href="">
                            <i className="fa-solid fa-bullhorn"></i>
                            <span>My Applied</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-regular fa-bookmark"></i>
                            <span>Shortlist Jobs</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-regular fa-user"></i>
                            <span>Following Employers</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-regular fa-bell"></i>
                            <span>Alerts Jobs</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-regular fa-comments"></i>
                            <span>Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-map-location-dot"></i>
                            <span>Meetings</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-lock"></i>
                            <span>Change Password</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-regular fa-trash-can"></i>
                            <span>Delete Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className="fa-solid fa-right-from-bracket"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
