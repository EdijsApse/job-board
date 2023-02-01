const LanguageList = ({ languages }) => {
    return (
        <ul className="resume-section-list language-list">
            {languages.map((language) => (
                <li key={language.id}>
                    <div className="icon">
                        <i className="fa-solid fa-language"></i>
                    </div>
                    <div className="list-item-detail">
                        <h4 className="title">{language.language.name}</h4>
                        <h5 className="subtitle section-color">
                            {language.language_level.name}
                        </h5>
                        {language.additional_notes && (
                            <p>{language.additional_notes}</p>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default LanguageList;
