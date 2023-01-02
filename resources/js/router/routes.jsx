import Landing from "../pages/Landing";
import JobList from "../pages/Job/List";
import JobView from "../pages/Job/View";
import RootLayout from "../pages/RootLayout";
import ErrorPage from "../pages/Error";

export default [
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
                path: "jobs/:id",
                element: <JobView />,
            },
        ],
    },
];
