import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarLink from "../../UI/DashboardSidebarLink";

const SidebarResumeDropdowns = () => {
    const location = useLocation();

    const isResumePage = location.pathname.includes("/resume");

    const [isResumeDropdownVisible, setIsResumeDropdownVisible] =
        useState(isResumePage);

    useEffect(() => {
        if (!isResumePage) {
            setIsResumeDropdownVisible(false);
        }
    }, [isResumePage]);

    const toggleResumeDropdownVisibility = () => {
        setIsResumeDropdownVisible((oldVisibility) => {
            return !oldVisibility;
        });
    };

    return (
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
    );
};

export default SidebarResumeDropdowns;
