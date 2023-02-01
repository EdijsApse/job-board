const OverviewSidebarCard = ({ resumeDetails, salary, profile }) => {
    let expectedSalary = "";
    
    if (salary) {
        expectedSalary = `${salary.min_salary} - ${salary.max_salary} $ / ${salary.type.name}`;
    }

    return (
        <div className="sidebar-card card-with-detail-icons">
            <h3>Canidate Overview</h3>
            {expectedSalary && (
                <div className="single-detail">
                    <div className="icon">
                        <i className="fa-solid fa-money-bill"></i>
                    </div>
                    <div className="info">
                        <h6>Expected Salary</h6>
                        <span>{expectedSalary}</span>
                    </div>
                </div>
            )}
            
            {resumeDetails && resumeDetails.experience && (
                <div className="single-detail">
                    <div className="icon">
                        <i className="fa-regular fa-calendar"></i>
                    </div>
                    <div className="info">
                        <h6>Experience (Years)</h6>
                        <span>{resumeDetails.experience}</span>
                    </div>
                </div>
            )}

            {profile && (
                <div className="single-detail">
                    <div className="icon">
                        <i className="fa-solid fa-venus-mars"></i>
                    </div>
                    <div className="info">
                        <h6>Gender</h6>
                        <span>{profile.gender_name}</span>
                    </div>
                </div>
            )}

            {profile && (
                <div className="single-detail">
                    <div className="icon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="info">
                        <h6>Age</h6>
                        <span>{profile.age}</span>
                    </div>
                </div>
            )}

            {profile && (
                <div className="single-detail">
                    <div className="icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="info">
                        <h6>Contact phone</h6>
                        <span>{profile.phone}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OverviewSidebarCard;
