import { useState } from "react";
import { useCallback, useMemo, useReducer, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getFiltersFromUrlSearchParams } from "../../helpers";

const SET_KEYWORD = "SET_KEYWORD";
const SET_CITY = "SET_CITY";
const SET_CATEGORY = "SET_CATEGORY";
const SET_EMPLOYMENT = "SET_EMPLOYMENT";
const SET_INITIAL_STATE = "SET_INITIAL_STATE";

const defaultState = {
    city_id: "",
    category_id: "",
    employment_type_id: "",
    keyword: "",
};

const filterReducer = (state = defaultState, action) => {
    const { type, value } = action;

    if (type === SET_INITIAL_STATE) {
        const { city_id, category_id, employment_type_id, keyword } = value;
        return {
            city_id: city_id ?? "",
            category_id: category_id ?? "",
            employment_type_id: employment_type_id ?? "",
            keyword: keyword ?? "",
        };
    }

    if (type === SET_KEYWORD) {
        return { ...state, keyword: value };
    }
    if (type === SET_CATEGORY) {
        return { ...state, category_id: value };
    }
    if (type === SET_EMPLOYMENT) {
        return { ...state, employment_type_id: value };
    }
    if (type === SET_CITY) {
        return { ...state, city_id: value };
    }
    return state;
};

const Filters = ({ preselectedFilters, updateFilters, resetSearch }) => {
    const cities = useSelector((state) => state.selectOptions.cities);
    const categories = useSelector((state) => state.selectOptions.categories);
    const employmentTypes = useSelector(
        (state) => state.selectOptions.employmentTypes
    );
    const [shouldWatchForChanges, setShouldWatchForChanges] = useState(false);

    const [filterState, dispatch] = useReducer(filterReducer, defaultState);

    useEffect(() => {
        dispatch({ type: SET_INITIAL_STATE, value: preselectedFilters });
    }, [preselectedFilters]);

    const setFilterValue = (type, event) => {
        dispatch({ type: type, value: event.target.value });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (shouldWatchForChanges) {
                updateFilters(filterState);
            }
            setShouldWatchForChanges(true);
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, [filterState]);

    return (
        <Fragment>
            <div className="single-filter">
                <h6>Search by Keywords</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        value={filterState.keyword}
                        onChange={setFilterValue.bind(null, SET_KEYWORD)}
                        className="form-control"
                        placeholder="Job title, keywords ..."
                    />
                </div>
            </div>
            <div className="single-filter">
                <h6>Location</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <select
                        className="form-select"
                        value={filterState.city_id}
                        onChange={setFilterValue.bind(null, SET_CITY)}
                    >
                        <option value="">Choose a city ...</option>
                        {cities.map((city) => (
                            <option value={city.value} key={city.value}>
                                {city.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="single-filter">
                <h6>Category</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-briefcase"></i>
                    <select
                        className="form-select"
                        value={filterState.category_id}
                        onChange={setFilterValue.bind(null, SET_CATEGORY)}
                    >
                        <option value="">Choose a category ...</option>
                        {categories.map((category) => (
                            <option value={category.value} key={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="single-filter">
                <h6>Job type</h6>
                <div className="form-group pre-icon">
                    <i className="fa-solid fa-briefcase"></i>
                    <select
                        className="form-select"
                        value={filterState.employment_type_id}
                        onChange={setFilterValue.bind(null, SET_EMPLOYMENT)}
                    >
                        <option value="">Select job type</option>
                        {employmentTypes.map((type) => (
                            <option value={type.value} key={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {/* <div className="single-filter">
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
            </div> */}
            <button className="btn btn-primary" onClick={resetSearch}>
                Reset Search
            </button>
        </Fragment>
    );
};

export default Filters;
