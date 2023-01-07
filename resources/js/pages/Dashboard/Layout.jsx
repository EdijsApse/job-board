import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import BaseLayout from "../BaseLayout";

const DashboardLayout = () => {
    return (
        <BaseLayout>
            <div className="dashboard-container">
                <Sidebar />
                <div className="dashboard-main">
                    <Outlet></Outlet>
                </div>
            </div>
        </BaseLayout>
    );
};

export default DashboardLayout;
