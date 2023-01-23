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

export default {
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
    ],
};
