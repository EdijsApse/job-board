import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { alertActions } from "../../store/slices/alert";

const CandidateOnly = ({ children }) => {
    const isCandidate = useSelector((state) => {
        const user = state.auth.user;
        return user && user.is_candidate;
    });

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
