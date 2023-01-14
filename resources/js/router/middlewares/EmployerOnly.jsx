import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const EmployerOnly = ({ children }) => {
    const isEmployer = useSelector((state) => {
        const user = state.auth.user;
        return user && user.is_employer;
    });

    if (!isEmployer) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default EmployerOnly;
