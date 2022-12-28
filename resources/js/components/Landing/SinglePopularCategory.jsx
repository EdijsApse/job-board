import Card from "../UI/Card";

const SinglePopularCategory = ({ category }) => {
    const positionText =
        category.position > 1
            ? `${category.position} open positions`
            : `${category.position} open position`;
    return (
        <Card className="single-popular-category" listTag={true}>
            <div className="category-icon">
                <i className={category.icon_class}></i>
            </div>
            <h5>{category.title}</h5>
            <p>({positionText})</p>
        </Card>
    );
};

export default SinglePopularCategory;
