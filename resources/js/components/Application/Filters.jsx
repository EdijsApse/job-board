import { useEffect, useState } from "react";

const Filters = ({ preselectedFilters, updateFilters, resetSearch }) => {
    const [keyword, setKeyword] = useState("");
    const canClearSearch = keyword;
    const searchOffers = (e) => {
        e.preventDefault();
        updateFilters({ keyword });
    };
    const updateKeywords = (e) => {
        setKeyword(e.target.value);
    };

    const resetSearchHandler = () => {
        if (keyword) {
            setKeyword('');
        }
        resetSearch();
    }

    useEffect(() => {
        const { keyword } = preselectedFilters;
        if (keyword) {
            setKeyword(keyword);
        }
    }, [preselectedFilters, setKeyword]);

    return (
        <form className="filters" onSubmit={searchOffers}>
            <div className="form-group input-with-icon">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter job keyword..."
                    value={keyword}
                    onChange={updateKeywords}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
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
