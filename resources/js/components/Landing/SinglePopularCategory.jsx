const SinglePopularCategory = ({ category }) => {
    const positionText =
        category.position > 1
            ? `${category.position} open positions`
            : `${category.position} open position`;
    return (
        <li className="single-popular-category">
            <div className="category-icon">
                <i className={category.icon_class}></i>
            </div>
            <h5>{category.title}</h5>
            <p>({positionText})</p>
        </li>
    );
};

export default SinglePopularCategory;
