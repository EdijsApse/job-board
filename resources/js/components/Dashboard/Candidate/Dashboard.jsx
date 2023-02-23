import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCandidateDashboard } from "../../../store/thunks/dashboard";
import DasboardStatsCard from "../../UI/DasboardStatsCard";
import DashboardCard from "../../UI/DashboardCard";
import DashboardPage from "../../UI/DashboardPage";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ApplicationListItem from "../../Application/ListItem";

const Dashboard = () => {
    const isLoaded = useSelector((state) => state.dashboard.isLoaded);
    const isLoading = useSelector((state) => state.dashboard.isLoading);
    const dispatch = useDispatch();

    const candidateDashboard = useSelector(
        (state) => state.dashboard.candidateDashboard
    );

    useEffect(() => {
        if (!isLoaded) {
            dispatch(loadCandidateDashboard());
        }
    }, []);

    if (isLoading) {
        return (
            <div className="relative mt-6">
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <DashboardPage pageTitle="Applications statistics">
            <div className="dashboard">
                <div className="application-statistics">
                    <DasboardStatsCard
                        className="blue"
                        title="Pending Applications"
                        count={candidateDashboard.pendingApplicationsCount}
                    >
                        <i className="fa-solid fa-briefcase"></i>
                    </DasboardStatsCard>
                </div>
                <DashboardCard>
                    <h5>Latest applications</h5>
                    <div className="applications-list">
                        {candidateDashboard.pendingApplications.map((application) => (
                            <ApplicationListItem
                                key={application.id}
                                application={application}
                            />
                        ))}
                    </div>
                </DashboardCard>
            </div>
        </DashboardPage>
    );
};

export default Dashboard;
