import profileImage from "../assets/test-logo.png";
import SidebarLink from "../UI/DashboardSidebarLink";

const Sidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-profile-widget">
                <div className="profile-image">
                    <img src={profileImage} alt="Profile image" />
                </div>
                <div className="profile-info">
                    <h6>Name</h6>
                    <p className="sub-title">Some sub title</p>
                    <button className="btn btn-primary">View Profile</button>
                </div>
            </div>
            <ul>
                <li>
                    <SidebarLink to="/dashboard">
                        <i className="fa-solid fa-table-columns"></i>
                        <span>User Dashboard</span>
                    </SidebarLink>
                </li>
                <li>
                    <SidebarLink to="/dashboard/company">
                        <i className="fa-solid fa-building"></i>
                        <span>Company Details</span>
                    </SidebarLink>
                </li>
                <li>
                    <a href="">
                        <i className="fa-solid fa-user-tie"></i>
                        <span>Profile</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="fa-regular fa-clipboard"></i>
                        <span>My Resume</span>
                    </a>
                </li>
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
    );
};

export default Sidebar;
