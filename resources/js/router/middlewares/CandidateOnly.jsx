import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CandidateOnly = ({ children }) => {
    const isCandidate = useSelector((state) => {
        const user = state.auth.user;
        return user && user.is_candidate;
    });

    if (!isCandidate) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};
export default CandidateOnly;
