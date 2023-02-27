import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarLink from "../UI/DashboardSidebarLink";

const FeaturedSidebarNavItems = () => {
    const location = useLocation();

    const isFeaturedListPage = location.pathname.includes("/featured");

    const [isNavItemsVisible, setIsNavItemsVisible] =
        useState(isFeaturedListPage);

    useEffect(() => {
        if (!isFeaturedListPage) {
            setIsNavItemsVisible(false);
        }
    }, [isFeaturedListPage]);

    return (
        <li>
            <button
                className={`btn secondary ${isNavItemsVisible ? "active" : ""}`}
                onClick={() => {
                    setIsNavItemsVisible((oldState) => !oldState);
                }}
            >
                <i className="fa-regular fa-bookmark"></i>
                <span>Featured Items</span>
            </button>
            {isNavItemsVisible && (
                <ul className="dropdown-links">
                    <li>
                        <SidebarLink to="/dashboard/featured/jobs">
                            <i className="fa-solid fa-briefcase"></i>
                            <span>Jobs</span>
                        </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/dashboard/featured/candidates">
                            <i className="fa-solid fa-user-graduate"></i>
                            <span>Candidates</span>
                        </SidebarLink>
                    </li>
                    <li>
                        <SidebarLink to="/dashboard/featured/companies">
                            <i className="fa-solid fa-building"></i>
                            <span>Companies</span>
                        </SidebarLink>
                    </li>
                </ul>
            )}
        </li>
    );
};

export default FeaturedSidebarNavItems;
