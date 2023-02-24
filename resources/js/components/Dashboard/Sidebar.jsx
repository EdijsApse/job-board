import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/use-user";
import profileImage from "../assets/placeholder-image.png";
import SidebarLink from "../UI/DashboardSidebarLink";
import SidebarResumeDropdowns from "./Candidate/SidebarResumeDropdowns";

const Sidebar = () => {
    const { user, isEmployer, isCandidate } = useUser();

    const profile = user && user.profile ? user.profile : null;
    let imgSrc = profile && profile.image ? profile.image : profileImage;
    const userType = user ? user.user_type_name : "";

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
                        <Fragment>
                            <SidebarResumeDropdowns />
                            <li>
                                <SidebarLink to="/dashboard/candidate/offers">
                                    <i className="fa-solid fa-briefcase"></i>
                                    <span>Received Offers</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink to="/dashboard/candidate/applications">
                                    <i className="fa-solid fa-bullhorn"></i>
                                    <span>My Applications</span>
                                </SidebarLink>
                            </li>
                        </Fragment>
                    )}
                    {isEmployer && (
                        <Fragment>
                            <li>
                                <SidebarLink to="/dashboard/employer/offers">
                                    <i className="fa-solid fa-briefcase"></i>
                                    <span>Sent Offers</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink to="/dashboard/employer/applications">
                                    <i className="fa-solid fa-bullhorn"></i>
                                    <span>Applications</span>
                                </SidebarLink>
                            </li>
                            <li>
                                <SidebarLink to="/dashboard/employer/jobs">
                                    <i className="fa-solid fa-briefcase"></i>
                                    <span>My Jobs</span>
                                </SidebarLink>
                            </li>
                        </Fragment>
                    )}
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
