import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardFooter from "../../components/DashboardFooter";
import BaseLayout from "../BaseLayout";

const DashboardLayout = () => {
    return (
        <BaseLayout>
            <div className="dashboard-container">
                <Sidebar />
                <div className="dashboard-main">
                    <Outlet></Outlet>
                    <DashboardFooter />
                </div>
            </div>
        </BaseLayout>
    );
};

export default DashboardLayout;
