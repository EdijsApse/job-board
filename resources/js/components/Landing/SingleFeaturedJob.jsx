import Badge from "../UI/Badge";

const SingleFeaturedJob = ({ job }) => {
    return (
        <li className="single-featured-job">
            <div className="job-header">
                <div className="job-image">
                    <img src={job.image} alt={`${job.title} image`} />
                </div>
                <div className="job-info">
                    <h5>{job.title}</h5>
                    <div className="job-details">
                        <div className="single-detail">
                            <i class="fa-solid fa-briefcase"></i>
                            <span>{job.category}</span>
                        </div>
                        <div className="single-detail">
                            <i class="fa-solid fa-location-crosshairs"></i>
                            <span>{job.location}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="job-badges">
                <Badge>{job.employment}</Badge>
                {job.is_urgent && <Badge className="orange">Urgent</Badge>}
            </div>
            <span className="btn-icon">
                <i class="fa-regular fa-bookmark"></i>
            </span>
        </li>
    );
};

export default SingleFeaturedJob;
