import { NavLink } from "react-router-dom";

const DashboardSidebarLink = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
        >
            {children}
        </NavLink>
    );
};

export default DashboardSidebarLink;
