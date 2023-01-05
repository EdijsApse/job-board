import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Landing from "../pages/Landing";
import JobList from "../pages/Job/List";
import JobView from "../pages/Job/View";
import RootLayout from "../pages/RootLayout";
import ErrorPage from "../pages/Error";
import CreateJob from "../pages/Job/Create";
import DashboardLayout from "../pages/Dashboard/Layout";
import DashboardIndex from "../pages/Dashboard/Index";
import DashboardCompany from "../pages/Dashboard/Employer/Details";
import { refreshUser } from "../store/thunks/auth";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useEffect } from "react";

const PrepareApp = ({ children }) => {
    const authDispatch = useDispatch();
    const userIsLoaded = useSelector(state => state.auth.userIsLoaded);
    
    useEffect(() => {
        authDispatch(refreshUser());
    }, []);

    if (!userIsLoaded) {
        return <LoadingSpinner />;
    }
    return children;
};

const AuthenticatedUserOnly = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};

export default [
    {
        path: "/dashboard",
        element: (
            <PrepareApp>
                <AuthenticatedUserOnly>
                    <DashboardLayout />
                </AuthenticatedUserOnly>
            </PrepareApp>
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
        element: (
            <PrepareApp>
                <RootLayout />
            </PrepareApp>
        ),
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
