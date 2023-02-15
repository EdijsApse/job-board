import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import useUser from "../../hooks/use-user";
import { alertActions } from "../../store/slices/alert";

const EmployerOnly = ({ children }) => {
    const { isEmployer } = useUser();
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
