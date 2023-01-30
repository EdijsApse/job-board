const Pagination = ({ currentPage, lastPage, setPage }) => {
    const pages = [];

    for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
    }

    const setPageHandler = (page) => {
        setPage(page);
    };

    const goBackHandler = () => {
        const nextPage = currentPage - 1;
        if (nextPage >= 1) {
            setPage(nextPage);
        }
    };

    const goNextHandler = () => {
        const nextPage = currentPage + 1;
        if (nextPage <= lastPage) {
            setPage(nextPage);
        }
    };

    return (
        <div className="pagination">
            <ul>
                <li onClick={goBackHandler}>
                    <i className="fa-solid fa-chevron-left"></i>
                </li>
                {pages.map((page) => (
                    <li
                        key={page}
                        onClick={setPageHandler.bind(null, page)}
                        className={`${page === currentPage ? "active" : ""}`}
                    >
                        {page}
                    </li>
                ))}
                <li onClick={goNextHandler}>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
