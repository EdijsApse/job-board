import DashboardCard from "../../../components/UI/DashboardCard";

const Details = () => {
    return (
        <div className="dashboard-page">
            <h1 className="page-title">Company details</h1>
            <DashboardCard>
                <form className="dashboard-form">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="company-name">
                                    Company Name
                                    <span className="asterisk">*</span>
                                </label>
                                <input
                                    id="company-name"
                                    className="form-control"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="company-category">
                                    Company Category
                                    <span className="asterisk">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    id="company-category"
                                >
                                    <option>Advertising</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="company-city">
                                    City
                                    <span className="asterisk">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    id="company-city"
                                >
                                    <option>Riga</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="company-country">
                                    Country
                                    <span className="asterisk">*</span>
                                </label>
                                <select
                                    className="form-select"
                                    id="company-country"
                                >
                                    <option>Latvia</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="company-email">
                                    Contact email
                                    <span className="asterisk">*</span>
                                </label>
                                <input
                                    id="company-email"
                                    type="email"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="company-phone">
                                    Contact phone
                                    <span className="asterisk">*</span>
                                </label>
                                <input
                                    id="company-phone"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="company-size">
                                    Company size
                                    <span className="asterisk">*</span>
                                </label>
                                <select
                                    id="company-size"
                                    className="form-select"
                                >
                                    <option>1-5 Employers</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="founded-year">
                                    Founded year
                                </label>
                                <input
                                    id="founded-year"
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="company-about">
                                    About Company
                                </label>
                                <textarea
                                    id="company-about"
                                    className="form-control"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary">Save Details</button>
                </form>
            </DashboardCard>
        </div>
    );
};
export default Details;
