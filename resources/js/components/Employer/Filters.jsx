import { useReducer, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

const SET_KEYWORD = "SET_KEYWORD";
const SET_CITY = "SET_CITY";
const SET_CATEGORY = "SET_CATEGORY";
const SET_COMPANY_SIZE = "SET_COMPANY_SIZE";
const SET_INITIAL_STATE = "SET_INITIAL_STATE";

const defaultState = {
    city_id: "",
    category_id: "",
    company_size_id: "",
    keyword: "",
};

const filterReducer = (state = defaultState, action) => {
    const { type, value } = action;

    if (type === SET_INITIAL_STATE) {
        const { city_id, category_id, company_size_id, keyword } = value;
        return {
            city_id: city_id ?? "",
            category_id: category_id ?? "",
            company_size_id: company_size_id ?? "",
            keyword: keyword ?? "",
        };
    }

    if (type === SET_KEYWORD) {
        return { ...state, keyword: value };
    }
    if (type === SET_CATEGORY) {
        return { ...state, category_id: value };
    }
    if (type === SET_COMPANY_SIZE) {
        return { ...state, company_size_id: value };
    }
    if (type === SET_CITY) {
        return { ...state, city_id: value };
    }
    return state;
};

const Filters = ({ preselectedFilters, updateFilters, resetSearch }) => {
    const cities = useSelector((state) => state.selectOptions.cities);
    const categories = useSelector((state) => state.selectOptions.categories);
    const companySizes = useSelector(
        (state) => state.selectOptions.companySizes
    );

    const [filterState, dispatch] = useReducer(filterReducer, defaultState);

    useEffect(() => {
        dispatch({ type: SET_INITIAL_STATE, value: preselectedFilters });
    }, [preselectedFilters]);

    const setFilterValue = (type, event) => {
        dispatch({ type: type, value: event.target.value });
    };

    const filterJobs = (e) => {
        e.preventDefault();
        updateFilters(filterState);
    };

    const canResetFilter =
        filterState.keyword ||
        filterState.city_id ||
        filterState.category_id ||
        filterState.company_size_id;

    return (
        <Fragment>
            <form onSubmit={filterJobs}>
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
                                <option
                                    value={category.value}
                                    key={category.value}
                                >
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="single-filter">
                    <h6>Company size</h6>
                    <div className="form-group pre-icon">
                        <i className="fa-solid fa-briefcase"></i>
                        <select
                            className="form-select"
                            value={filterState.comapnySizes}
                            onChange={setFilterValue.bind(null, SET_COMPANY_SIZE)}
                        >
                            <option value="">Select company size</option>
                            {companySizes.map((type) => (
                                <option value={type.value} key={type.value}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className="btn btn-primary">Filter companies</button>
                {canResetFilter && (
                    <button
                        className="btn btn-danger mt-4"
                        type="button"
                        onClick={resetSearch}
                    >
                        Reset Search
                    </button>
                )}
            </form>
        </Fragment>
    );
};

export default Filters;
