import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import useUser from "../../hooks/use-user";
import { alertActions } from "../../store/slices/alert";

const CompanyOnly = ({ children }) => {
    const { company } = useUser();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!company) {
            dispatch(
                alertActions.showWarningAlert({
                    message: "Add Company Details, before posting jobs!",
                })
            );
        }
    }, [company]);

    if (!company) {
        return <Navigate to="/dashboard/company" />;
    }

    return children;
};

export default CompanyOnly;
