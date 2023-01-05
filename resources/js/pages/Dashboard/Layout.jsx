import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import Navigation from "../../components/Navigation";

const DashboardLayout = () => {
    return (
        <Fragment>
            <Navigation />
            <div className="dashboard-container">
                <Sidebar />
                <div className="dashboard-main">
                    <Outlet></Outlet>
                </div>
            </div>
            <ScrollRestoration
                getKey={(location) => {
                    return location.key;
                }}
            />
        </Fragment>
    );
};

export default DashboardLayout;
