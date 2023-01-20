import Landing from "../pages/Landing";
import JobList from "../pages/Job/List";
import JobView from "../pages/Job/View";
import RootLayout from "../pages/RootLayout";
import ErrorPage from "../pages/Error";
import CreateJob from "../pages/Job/Create";
import DashboardLayout from "../pages/Dashboard/Layout";
import DashboardIndex from "../pages/Dashboard/Index";
import DashboardCompany from "../pages/Dashboard/Employer/Details";
import DashboardProfile from "../pages/Dashboard/Profile";
import BasicDetails from "../pages/Dashboard/Candidate/BasicDetails";
import Experiences from "../pages/Dashboard/Candidate/Experiences";
import Salary from "../pages/Dashboard/Candidate/Salary";

import PrepareApp from "./middlewares/PrepareApp";
import AuthenticatedUserOnly from "./middlewares/AuthenticatedUserOnly";
import EmployerOnly from "./middlewares/EmployerOnly";
import CandidateOnly from "./middlewares/CandidateOnly";

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
                element: (
                    <EmployerOnly>
                        <DashboardCompany />
                    </EmployerOnly>
                ),
            },
            {
                path: "profile",
                element: <DashboardProfile />,
            },
            {
                path: "resume",
                element: (
                    <CandidateOnly>
                        <BasicDetails />
                    </CandidateOnly>
                ),
            },
            {
                path: "resume/salary",
                element: (
                    <CandidateOnly>
                        <Salary />
                    </CandidateOnly>
                ),
            },
            {
                path: "resume/experiences",
                element: (
                    <CandidateOnly>
                        <Experiences />
                    </CandidateOnly>
                ),
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
