const OverviewSidebarCard = ({ job }) => {
    const location = `${job.city.name} - ${job.street}`;
    const salary = `${job.min_salary} - ${job.max_salary} / ${job.salary_type.name}`;

    return (
        <div className="sidebar-card card-with-detail-icons">
            <h3>Job Overview</h3>
            <div className="single-detail">
                <div className="icon">
                    <i className="fa-regular fa-calendar"></i>
                </div>
                <div className="info">
                    <h6>Date Posted</h6>
                    <span>{job.created}</span>
                </div>
            </div>
            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info">
                    <h6>Location</h6>
                    <span>{location}</span>
                </div>
            </div>
            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-money-bill"></i>
                </div>
                <div className="info">
                    <h6>Offered Salary</h6>
                    <span>{salary}</span>
                </div>
            </div>
            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="info">
                    <h6>Employment Type</h6>
                    <span>{job.employment_type.name}</span>
                </div>
            </div>
            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-business-time"></i>
                </div>
                <div className="info">
                    <h6>Expiration date</h6>
                    <span>{job.expiration_date}</span>
                </div>
            </div>
            {job.years_of_experience_required != null && (
                <div className="single-detail">
                    <div className="icon">
                        <i className="fa-solid fa-user-tie"></i>
                    </div>
                    <div className="info">
                        <h6>Experience</h6>
                        <span>{job.years_of_experience_required}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OverviewSidebarCard;
