import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import useUser from "../../hooks/use-user";
import { alertActions } from "../../store/slices/alert";

const CandidateOnly = ({ children }) => {
    const { isCandidate } = useUser();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isCandidate) {
            dispatch(
                alertActions.showWarningAlert({
                    message: "This action is for candidates only!",
                })
            );
        }
    }, [isCandidate]);

    if (!isCandidate) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};
export default CandidateOnly;
