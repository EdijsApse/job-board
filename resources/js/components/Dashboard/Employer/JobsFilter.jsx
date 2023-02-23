import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Filters = ({ preselectedFilters, updateFilters, resetSearch }) => {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const categories = useSelector((state) => state.selectOptions.categories);
    const canClearSearch = keyword || category;
    const searchOffers = (e) => {
        e.preventDefault();
        updateFilters({ keyword, category_id: category });
    };

    const resetSearchHandler = () => {
        if (keyword) {
            setKeyword("");
        }
        if (category) {
            setCategory("");
        }
        resetSearch();
    };

    useEffect(() => {
        const { keyword, category_id } = preselectedFilters;
        if (keyword) {
            setKeyword(keyword);
        }
        if (category_id) {
            setCategory(category_id);
        }
    }, [preselectedFilters, setKeyword, setCategory]);

    return (
        <form className="filters" onSubmit={searchOffers}>
            <div className="form-group input-with-icon">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter keyword..."
                    value={keyword}
                    onChange={(e) => {
                        setKeyword(e.target.value);
                    }}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="form-group input-with-icon">
                <select
                    className="form-control"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
                <i className="fa-solid fa-briefcase"></i>
            </div>
            <button className="btn btn-primary">Search</button>
            {canClearSearch && (
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={resetSearchHandler}
                >
                    Clear filters
                </button>
            )}
        </form>
    );
};

export default Filters;
