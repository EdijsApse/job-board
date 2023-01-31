import { NavLink } from "react-router-dom";

const BreadCrumbs = ({ crumbs }) => {
    return (
        <ul className="breadcrumbs">
            {crumbs.map((crumb) => (
                <li key={crumb.link}>
                    <NavLink to={crumb.link}>{crumb.title}</NavLink>
                </li>
            ))}
        </ul>
    );
};
export default BreadCrumbs;
