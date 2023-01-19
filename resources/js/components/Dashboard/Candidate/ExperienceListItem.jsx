import { useState } from "react";
import SingleExperienceForm from "./SingleExperienceForm";

const ExperienceListItem = ({ experience, onRemoveExp, onDeleteExp }) => {
    const [formIsVisible, setFormIsVisible] = useState(
        experience.openFormByDefault ?? false
    );

    const toggleFormVisibility = () => {
        setFormIsVisible((oldState) => {
            return !oldState;
        });
    };

    const onRemoveExpHandler = (e) => {
        e.stopPropagation();
        if (experience.temp_id) {
            onRemoveExp(experience);
        } else {
            onDeleteExp(experience);
        }
    };

    const closeForm = () => {
        setFormIsVisible(false);
    };

    let itemTitle = experience.employer
        ? `${experience.jobtitle} / ${experience.employer}`
        : experience.jobtitle;

    const itemClasses = `single-section-list-item ${
        formIsVisible ? "item-form-opened" : ""
    }`;

    return (
        <div className="item-with-form relative">
            <div className={itemClasses} onClick={toggleFormVisibility}>
                <div className="remove-btn" onClick={onRemoveExpHandler}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="item-details">
                    <h5>{itemTitle}</h5>
                </div>
                <div className="expand-btn">
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            {formIsVisible && (
                <SingleExperienceForm
                    experience={experience}
                    onCloseForm={closeForm}
                />
            )}
        </div>
    );
};

export default ExperienceListItem;
