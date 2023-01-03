import BreadCrumbs from "../../components/UI/Breadcrumbs";
import Wrapper from "../../components/UI/Wrapper";

const CreateJob = () => {
    return (
        <div className="page create-job-page">
            <div className="page-header">
                <h1>Create Job</h1>
                <BreadCrumbs />
            </div>
            <main className="container-fluid">
                <Wrapper className="job-form-section">
                    <h2>Post Job</h2>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="title" className="bold">
                                        Job Title
                                        <span className="asterisk">*</span>
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="bold" htmlFor="country">
                                        Country
                                        <span className="asterisk">*</span>
                                    </label>
                                    <select className="form-select">
                                        <option>Latvia</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="bold" htmlFor="city">
                                        City<span className="asterisk">*</span>
                                    </label>
                                    <select className="form-select">
                                        <option>Riga</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="category" className="bold">
                                        Category
                                        <span className="asterisk">*</span>
                                    </label>
                                    <select
                                        id="category"
                                        className="form-select"
                                    >
                                        <option>Health Care</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="employment-type"
                                        className="bold"
                                    >
                                        Type
                                        <span className="asterisk">*</span>
                                    </label>
                                    <select
                                        id="employment-type"
                                        className="form-select"
                                    >
                                        <option>Full Time</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="min-salary"
                                        className="bold"
                                    >
                                        Min Salary
                                        <span className="asterisk">*</span>
                                    </label>
                                    <input
                                        id="min-salary"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="max-salary"
                                        className="bold"
                                    >
                                        Max Salary
                                        <span className="asterisk">*</span>
                                    </label>
                                    <input
                                        id="max-salary"
                                        type="number"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                    <label
                                        htmlFor="job-description"
                                        className="bold"
                                    >
                                        Job Description
                                        <span className="asterisk">*</span>
                                    </label>
                                    <textarea
                                        id="job-description"
                                        className="form-control"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="expiration-date"
                                        className="bold"
                                    >
                                        Expiration date
                                        <span className="asterisk">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="expiration-date"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="qualification"
                                        className="bold"
                                    >
                                        Qualification
                                    </label>
                                    <select
                                        id="qualification"
                                        className="form-select"
                                    >
                                        <option>Bachelor Degree</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label
                                        htmlFor="experience"
                                        className="bold"
                                    >
                                        Experience (Years)
                                    </label>
                                    <input
                                        type="number"
                                        id="experience"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="job-badges-switches">
                                <h5>Job badges</h5>
                                    <div className="form-switch">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="is_featured"
                                        />
                                        <label
                                            className="bold form-check-label"
                                            htmlFor="is_featured"
                                        >
                                            Featured Job
                                        </label>
                                    </div>
                                    <div className="form-switch">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="is_urgent"
                                        />
                                        <label
                                            className="bold form-check-label"
                                            htmlFor="is_urgent"
                                        >
                                            Actively recruiting new employers
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary submit-job">Create Job</button>
                    </form>
                </Wrapper>
            </main>
        </div>
    );
};

export default CreateJob;
