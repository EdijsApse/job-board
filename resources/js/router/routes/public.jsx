import Landing from "../../pages/Landing";
import JobList from "../../pages/Job/List";
import JobView from "../../pages/Job/View";
import RootLayout from "../../pages/RootLayout";
import ErrorPage from "../../pages/Error";
import CreateJob from "../../pages/Job/Create";
import NotFoundPage from "../../pages/NotFoundPage";
import PrepareApp from "../middlewares/PrepareApp";
import EmployerOnly from "../middlewares/EmployerOnly";
import CompanyOnly from "../middlewares/CompanyOnly";

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
            path: "404",
            element: <NotFoundPage />,
        },
    ],
};