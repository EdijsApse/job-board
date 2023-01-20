import SalaryForm from "../../../components/Dashboard/Candidate/SalaryForm";

const Salary = () => {
    return (
        <div className="dashboard-page">
            <h1 className="page-title">Edit Salary</h1>
            <section className="dashboard-page-section">
                <SalaryForm />
            </section>
        </div>
    );
};

export default Salary;
