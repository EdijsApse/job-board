import SalaryForm from "../../components/Dashboard/Candidate/SalaryForm";
import ProfileForm from "../../components/Dashboard/ProfileForm";

const Details = () => {
    return (
        <div className="dashboard-page">
            <section className="dashboard-page-section">
                <h1 className="page-title">Profile Details</h1>
                <ProfileForm />
            </section>
        </div>
    );
};
export default Details;
