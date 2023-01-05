import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Landing from "../pages/Landing";
import JobList from "../pages/Job/List";
import JobView from "../pages/Job/View";
import RootLayout from "../pages/RootLayout";
import ErrorPage from "../pages/Error";
import CreateJob from "../pages/Job/Create";
import DashboardLayout from "../pages/Dashboard/Layout";
import DashboardIndex from "../pages/Dashboard/Index";
import DashboardCompany from '../pages/Dashboard/Employer/Details';

const AuthenticatedUserOnly = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return children;
};

export default [
    {
        path: "/dashboard",
        element: (
            <AuthenticatedUserOnly>
                <DashboardLayout />
            </AuthenticatedUserOnly>
        ),
        errorElement: <p>Error page</p>,
        children: [
            {
                index: true,
                element: <DashboardIndex />,
            },
            {
                path: "company",
                element: <DashboardCompany />,
            },
        ],
    },
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "jobs",
                element: <JobList />,
            },
            {
                path: "jobs/create",
                element: <CreateJob />,
            },
            {
                path: "jobs/:id",
                element: <JobView />,
            },
        ],
    },
];
