import ResumeForm from "../../../components/Dashboard/Candidate/ResumeForm";
import SalaryForm from "../../../components/Dashboard/Candidate/SalaryForm";

const Resume = () => {
    return (
        <div className="dashboard-page">
            <h1 className="page-title">Edit Resume</h1>
            <section className="dashboard-page-section">
                <ResumeForm />
            </section>
            <section className="dashboard-page-section">
                <SalaryForm />
            </section>

            // Experience
            // Education
        </div>
    );
};

export default Resume;
