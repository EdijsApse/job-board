const OverviewSidebarCard = ({ employer }) => {
    return (
        <div className="sidebar-card card-with-detail-icons">
            <h3>Employer Overview</h3>

            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="info">
                    <h6>Category</h6>
                    <span>{employer.category.name}</span>
                </div>
            </div>

            {employer.year_founded ? (
                <div className="single-detail">
                    <div className="icon">
                        <i className="fa-regular fa-calendar"></i>
                    </div>
                    <div className="info">
                        <h6>Founded</h6>
                        <span>{employer.year_founded}</span>
                    </div>
                </div>
            ) : (
                ""
            )}

            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-users"></i>
                </div>
                <div className="info">
                    <h6>Company Size</h6>
                    <span>{employer.companySize.size}</span>
                </div>
            </div>

            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-location-crosshairs"></i>
                </div>
                <div className="info">
                    <h6>Location</h6>
                    <span>{employer.city.name}</span>
                </div>
            </div>

            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="info">
                    <h6>Email</h6>
                    <span>{employer.contact_email}</span>
                </div>
            </div>

            <div className="single-detail">
                <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info">
                    <h6>Phone</h6>
                    <span>{employer.contact_phone}</span>
                </div>
            </div>
        </div>
    );
};

export default OverviewSidebarCard;
