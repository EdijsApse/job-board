import { useReducer, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";

const SET_KEYWORD = "SET_KEYWORD";
const SET_CATEGORY = "SET_CATEGORY";
const SET_INITIAL_STATE = "SET_INITIAL_STATE";

const defaultState = {
    category_id: "",
    keyword: "",
};

const filterReducer = (state = defaultState, action) => {
    const { type, value } = action;

    if (type === SET_INITIAL_STATE) {
        const { category_id, keyword } = value;
        return {
            category_id: category_id ?? "",
            keyword: keyword ?? "",
        };
    }

    if (type === SET_KEYWORD) {
        return { ...state, keyword: value };
    }

    if (type === SET_CATEGORY) {
        return { ...state, category_id: value };
    }

    return state;
};

const Filters = ({ preselectedFilters, updateFilters, resetSearch }) => {
    const categories = useSelector((state) => state.selectOptions.categories);
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
        filterState.category_id

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
                            placeholder="Candidate job title, keywords ..."
                        />
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
                <button className="btn btn-primary">Filter Jobs</button>
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
