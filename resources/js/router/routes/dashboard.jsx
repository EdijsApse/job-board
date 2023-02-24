import AuthenticatedUserOnly from "../middlewares/AuthenticatedUserOnly";
import EmployerOnly from "../middlewares/EmployerOnly";
import CandidateOnly from "../middlewares/CandidateOnly";
import DashboardLayout from "../../pages/Dashboard/Layout";
import DashboardIndex from "../../pages/Dashboard/Index";
import DashboardCompany from "../../pages/Dashboard/Employer/Details";
import DashboardProfile from "../../pages/Dashboard/Profile";
import BasicDetails from "../../pages/Dashboard/Candidate/BasicDetails";
import Experiences from "../../pages/Dashboard/Candidate/Experiences";
import Salary from "../../pages/Dashboard/Candidate/Salary";
import Educations from "../../pages/Dashboard/Candidate/Educations";
import Languages from "../../pages/Dashboard/Candidate/Languages";
import DashboardPage from "../../components/UI/DashboardPage";
import PrepareApp from "../middlewares/PrepareApp";
import ErrorPage from "../../pages/Error";
import EmployerOffers from "../../pages/Dashboard/Employer/Offers";
import EmployerApplications from "../../pages/Dashboard/Employer/Applications";
import EmployerJobs from "../../pages/Dashboard/Employer/Jobs";
import CandidateOffers from "../../pages/Dashboard/Candidate/Offers";
import CandidateApplications from "../../pages/Dashboard/Candidate/Applications";

export default {
    path: "/dashboard",
    element: (
        <PrepareApp>
            <AuthenticatedUserOnly>
                <DashboardLayout />
            </AuthenticatedUserOnly>
        </PrepareApp>
    ),
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <DashboardIndex />,
        },
        {
            path: "company",
            element: (
                <EmployerOnly>
                    <DashboardPage pageTitle="Company details">
                        <DashboardCompany />
                    </DashboardPage>
                </EmployerOnly>
            ),
        },
        {
            path: "profile",
            element: (
                <DashboardPage pageTitle="Profile Details">
                    <DashboardProfile />
                </DashboardPage>
            ),
        },
        {
            path: "resume",
            element: (
                <CandidateOnly>
                    <DashboardPage pageTitle="Edit Basic Details">
                        <BasicDetails />
                    </DashboardPage>
                </CandidateOnly>
            ),
        },
        {
            path: "resume/salary",
            element: (
                <CandidateOnly>
                    <DashboardPage pageTitle="Edit Salary">
                        <Salary />
                    </DashboardPage>
                </CandidateOnly>
            ),
        },
        {
            path: "resume/experiences",
            element: (
                <CandidateOnly>
                    <DashboardPage pageTitle="Edit Experiences">
                        <Experiences />
                    </DashboardPage>
                </CandidateOnly>
            ),
        },
        {
            path: "resume/educations",
            element: (
                <CandidateOnly>
                    <DashboardPage pageTitle="Edit Educations">
                        <Educations />
                    </DashboardPage>
                </CandidateOnly>
            ),
        },
        {
            path: "resume/languages",
            element: (
                <CandidateOnly>
                    <DashboardPage pageTitle="Edit Languages">
                        <Languages />
                    </DashboardPage>
                </CandidateOnly>
            ),
        },
        {
            path: "employer/offers",
            element: (
                <EmployerOnly>
                    <DashboardPage pageTitle="Sent Offers">
                        <EmployerOffers />
                    </DashboardPage>
                </EmployerOnly>
            ),
        },
        {
            path: "employer/applications",
            element: (
                <EmployerOnly>
                    <DashboardPage pageTitle="Received Applications">
                        <EmployerApplications />
                    </DashboardPage>
                </EmployerOnly>
            ),
        },
        {
            path: "employer/jobs",
            element: (
                <EmployerOnly>
                    <DashboardPage pageTitle="My Jobs">
                        <EmployerJobs />
                    </DashboardPage>
                </EmployerOnly>
            ),
        },
        {
            path: "candidate/offers",
            element: (
                <CandidateOnly>
                    <DashboardPage pageTitle="Incoming Offers">
                        <CandidateOffers />
                    </DashboardPage>
                </CandidateOnly>
            ),
        },
        {
            path: "candidate/applications",
            element: (
                <CandidateOnly>
                    <DashboardPage pageTitle="Sent Applications">
                        <CandidateApplications />
                    </DashboardPage>
                </CandidateOnly>
            ),
        },
    ],
};
