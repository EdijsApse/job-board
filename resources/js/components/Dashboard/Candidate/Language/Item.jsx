import { useState } from "react";
import Form from "./Form";

const Item = ({ language, onRemove, onDelete }) => {
    const [formIsVisible, setFormIsVisible] = useState(
        language.openFormByDefault ?? false
    );

    const toggleFormVisibility = () => {
        setFormIsVisible((oldState) => {
            return !oldState;
        });
    };

    const onRemoveHandler = (e) => {
        e.stopPropagation();
        if (language.temp_id) {
            onRemove(language);
        } else {
            onDelete(language);
        }
    };

    const closeForm = () => {
        setFormIsVisible(false);
    };

    let itemTitle = "";

    if (language.language && language.language.name) {
        itemTitle = `${language.language.name} - ${language.language_level.name}`;
    }

    const itemClasses = `single-section-list-item ${
        formIsVisible ? "item-form-opened" : ""
    }`;

    return (
        <div className="item-with-form relative">
            <div className={itemClasses} onClick={toggleFormVisibility}>
                <div className="remove-btn" onClick={onRemoveHandler}>
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
                <Form language={language} onCloseForm={closeForm} />
            )}
        </div>
    );
};

export default Item;
