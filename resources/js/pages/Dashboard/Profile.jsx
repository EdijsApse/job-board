import SalaryForm from "../../components/Dashboard/Candidate/SalaryForm";
import ProfileForm from "../../components/Dashboard/ProfileForm";

const Details = () => {
    return (
        <div className="dashboard-page">
            <section className="dashboard-page-section">
                <h1 className="page-title">Profile Details</h1>
                <ProfileForm />
            </section>
            <section className="dashboard-page-section">
                <h2 className="section-title">Salary Details</h2>
                <SalaryForm />
            </section>
        </div>
    );
};
export default Details;
