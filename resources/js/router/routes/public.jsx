import Landing from "../../pages/Landing";
import JobList from "../../pages/Job/List";
import JobView from "../../pages/Job/View";
import EmployerView from "../../pages/Employer/View";
import RootLayout from "../../pages/RootLayout";
import ErrorPage from "../../pages/Error";
import CreateJob from "../../pages/Job/Create";
import NotFoundPage from "../../pages/NotFoundPage";
import PrepareApp from "../middlewares/PrepareApp";
import EmployerOnly from "../middlewares/EmployerOnly";
import CompanyOnly from "../middlewares/CompanyOnly";
import EmployerList from "../../pages/Employer/List";
import CandidateList from "../../pages/Candidates/List";
import CandidateView from "../../pages/Candidates/View";
import EditJob from "../../pages/Job/Edit";

export default {
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
            element: (
                <EmployerOnly>
                    <CompanyOnly>
                        <CreateJob />
                    </CompanyOnly>
                </EmployerOnly>
            ),
        },
        {
            path: "jobs/:id",
            element: <JobView />,
        },
        {
            path: "jobs/:id/edit",
            element: (
                <EmployerOnly>
                    <CompanyOnly>
                        <EditJob />
                    </CompanyOnly>
                </EmployerOnly>
            ),
        },
        {
            path: "employers",
            element: <EmployerList />,
        },
        {
            path: "employers/:id",
            element: <EmployerView />,
        },
        {
            path: "candidates",
            element: <CandidateList />,
        },
        {
            path: "candidates/:id",
            element: <CandidateView />,
        },
        {
            path: "404",
            element: <NotFoundPage />,
        },
    ],
};
