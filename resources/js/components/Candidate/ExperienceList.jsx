const ExperienceList = ({ experiences }) => {
    return (
        <ul className="resume-section-list experience-list">
            {experiences.map((experience) => (
                <li key={experience.id}>
                    <div className="icon">
                        <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="list-item-detail">
                        <h4 className="title">
                            {experience.jobtitle}
                            <span className="section-color">
                                {`${experience.date_from} - ${experience.date_to}`}
                            </span>
                        </h4>
                        <h5 className="subtitle section-color">
                            {experience.employer}
                        </h5>
                        {experience.duties && <p>{experience.duties}</p>}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ExperienceList;
