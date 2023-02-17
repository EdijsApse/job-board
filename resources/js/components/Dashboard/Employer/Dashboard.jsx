import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEmployerDashboard } from "../../../store/thunks/dashboard";
import DasboardStatsCard from "../../UI/DasboardStatsCard";
import DashboardCard from "../../UI/DashboardCard";
import DashboardPage from "../../UI/DashboardPage";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ApplicationListItem from "../../Application/ListItem";
import OfferListItem from "../../Offers/ListItem";

const Dashboard = () => {
    const isLoaded = useSelector((state) => state.dashboard.isLoaded);
    const isLoading = useSelector((state) => state.dashboard.isLoading);
    const dispatch = useDispatch();

    const employerDashboard = useSelector(
        (state) => state.dashboard.employerDashboard
    );

    useEffect(() => {
        if (!isLoaded) {
            dispatch(loadEmployerDashboard());
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
                        count={employerDashboard.pendingApplicationsCount}
                    >
                        <i className="fa-solid fa-briefcase"></i>
                    </DasboardStatsCard>
                    <DasboardStatsCard
                        className="green"
                        title="Pending Offers"
                        count={employerDashboard.pendingOffersCount}
                    >
                        <i className="fa-solid fa-briefcase"></i>
                    </DasboardStatsCard>
                </div>
                <div className="employer-listings">
                    <DashboardCard>
                        <h5>Latest applications</h5>
                        <div className="applications-list">
                            {employerDashboard.applications.map(
                                (application) => (
                                    <ApplicationListItem
                                        key={application.id}
                                        application={application}
                                    />
                                )
                            )}
                        </div>
                    </DashboardCard>

                    <DashboardCard>
                        <h5>Latest offers</h5>
                        <div className="offers-list">
                            {employerDashboard.offers.map((offer) => (
                                <OfferListItem key={offer.id} offer={offer} />
                            ))}
                        </div>
                    </DashboardCard>
                </div>
            </div>
        </DashboardPage>
    );
};

export default Dashboard;
