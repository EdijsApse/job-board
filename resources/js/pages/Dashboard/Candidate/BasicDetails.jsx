import BasicDetailsForm from "../../../components/Dashboard/Candidate/BasicDetailsForm";

const BasicDetails = () => {
    return (
        <div className="dashboard-page">
            <h1 className="page-title">Edit Basic Details</h1>
            <section className="dashboard-page-section">
                <BasicDetailsForm />
            </section>
        </div>
    );
};

export default BasicDetails;
