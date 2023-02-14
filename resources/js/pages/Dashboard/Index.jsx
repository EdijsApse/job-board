import { useSelector } from "react-redux";
import CandidateDashboard from "../../components/Dashboard/Candidate/Dashboard";
import EmployerDashboard from "../../components/Dashboard/Employer/Dashboard";

const DashboardIndex = () => {
    const isCandidate = useSelector((state) => {
        const user = state.auth.user;
        return user && user.is_candidate;
    });

    const isEmployer = useSelector((state) => {
        const user = state.auth.user;
        return user && user.is_employer;
    });

    if (isEmployer) {
        return <EmployerDashboard />;
    } else if (isCandidate) {
        return <CandidateDashboard />;
    }

    return <></>;
};

export default DashboardIndex;
