import { Fragment } from "react";

const Filters = () => {
    return (
        <Fragment>
            <div className="single-filter">
                <h6>Search by Keywords</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Job title, keywords ..."
                    />
                </div>
            </div>
            <div className="single-filter">
                <h6>Location</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="City or postcode"
                    />
                </div>
            </div>
            <div className="single-filter">
                <h6>Category</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-briefcase"></i>
                    <select className="form-select">
                        <option>Choose a category ...</option>
                    </select>
                </div>
            </div>
            <div className="single-filter">
                <h6>Job type</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-briefcase"></i>
                    <select className="form-select">
                        <option>Job type</option>
                    </select>
                </div>
            </div>
            <div className="single-filter">
                <h6>Date posted</h6>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="posted"
                        id="hour"
                    />
                    <label className="form-check-label" htmlFor="hour">
                        Last hour
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="posted"
                        id="day"
                    />
                    <label className="form-check-label" htmlFor="day">
                        Last 24 hours
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="posted"
                        id="week"
                    />
                    <label className="form-check-label" htmlFor="week">
                        Last 7 days
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="posted"
                        id="2_weeks"
                    />
                    <label className="form-check-label" htmlFor="2_weeks">
                        Last 14 days
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="posted"
                        id="month"
                    />
                    <label className="form-check-label" htmlFor="month">
                        Last 30 days
                    </label>
                </div>
            </div>
            <div className="single-filter">
                <h6>Experience level</h6>
                <div className="form-switch">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="fresh"
                    />
                    <label className="form-check-label" htmlFor="fresh">
                        Fresh
                    </label>
                </div>
                <div className="form-switch">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="year"
                    />
                    <label className="form-check-label" htmlFor="year">
                        1 Year
                    </label>
                </div>
                <div className="form-switch">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="2_years"
                    />
                    <label className="form-check-label" htmlFor="2_years">
                        2 Year
                    </label>
                </div>
                <div className="form-switch">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="3_years"
                    />
                    <label className="form-check-label" htmlFor="3_years">
                        3 Year
                    </label>
                </div>
                <div className="form-switch">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="4_years"
                    />
                    <label className="form-check-label" htmlFor="4_years">
                        4 Year
                    </label>
                </div>
                <div className="form-switch">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="5_years"
                    />
                    <label className="form-check-label" htmlFor="5_years">
                        5 Year
                    </label>
                </div>
            </div>
            <button className="btn btn-primary">Find Jobs</button>
        </Fragment>
    );
};

export default Filters;
