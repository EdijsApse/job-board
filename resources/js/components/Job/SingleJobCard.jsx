import Badge from "../UI/Badge";
import Card from "../UI/Card";

const SingleJobCard = ({
    job,
    showSalary = false,
    squareImage = false,
    showFeaturedBadge = false,
}) => {
    return (
        <Card className="single-job-card" listTag={true}>
            <div className="job-header">
                <div
                    className={`job-image ${squareImage ? "square-image" : ""}`}
                >
                    <img src={job.image} alt={`${job.title} image`} />
                </div>
                <div className="job-info">
                    <h5>{job.title}</h5>
                    <div className="job-details">
                        <div className="single-detail">
                            <i className="fa-solid fa-briefcase"></i>
                            <span>{job.category}</span>
                        </div>
                        <div className="single-detail">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <span>{job.location}</span>
                        </div>
                        {showSalary && (
                            <div className="single-detail">
                                <i className="fa-solid fa-money-bill-wave"></i>
                                <span>$450 - $500 / month</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="job-badges">
                <Badge>{job.employment}</Badge>
                {job.is_urgent && <Badge className="orange">Urgent</Badge>}
                {showFeaturedBadge && job.is_featured && (
                    <Badge className="green">Featured</Badge>
                )}
            </div>
            <span className="btn-icon">
                <i className="fa-regular fa-bookmark"></i>
            </span>
        </Card>
    );
};

export default SingleJobCard;
