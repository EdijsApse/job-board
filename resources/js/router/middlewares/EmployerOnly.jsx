import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { alertActions } from "../../store/slices/alert";

const EmployerOnly = ({ children }) => {
    const isEmployer = useSelector((state) => {
        const user = state.auth.user;
        return user && user.is_employer;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isEmployer) {
            dispatch(
                alertActions.showWarningAlert({
                    message: "This action is for employers only!",
                })
            );
        }
    }, [isEmployer]);

    if (!isEmployer) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default EmployerOnly;
