import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { alertActions } from "../../store/slices/alert";

const CompanyOnly = ({ children }) => {
    const hasCompany = useSelector((state) => {
        const user = state.auth.user;
        return user && user.company;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!hasCompany) {
            dispatch(
                alertActions.showWarningAlert({
                    message: "Add Company Details, before posting jobs!",
                })
            );
        }
    }, [hasCompany]);

    if (!hasCompany) {
        return <Navigate to="/dashboard/company" />;
    }

    return children;
};

export default CompanyOnly;
