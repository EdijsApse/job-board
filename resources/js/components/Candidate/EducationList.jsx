const EducationList = ({ educations }) => {
    return (
        <ul className="resume-section-list education-list">
            {educations.map((education) => (
                <li key={education.id}>
                    <div className="icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div className="list-item-detail">
                        <h4 className="title">
                            {education.field}
                            <span className="section-color">
                                {education.year}
                            </span>
                        </h4>
                        <h5 className="subtitle section-color">
                            {education.school}
                        </h5>
                        {education.summary && <p>{education.summary}</p>}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EducationList;
