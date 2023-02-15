import CandidateDashboard from "../../components/Dashboard/Candidate/Dashboard";
import EmployerDashboard from "../../components/Dashboard/Employer/Dashboard";
import useUser from "../../hooks/use-user";

const DashboardIndex = () => {
    const {isCandidate, isEmployer} = useUser();

    if (isEmployer) {
        return <EmployerDashboard />;
    } else if (isCandidate) {
        return <CandidateDashboard />;
    }

    return <></>;
};

export default DashboardIndex;
