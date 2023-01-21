import { useState } from "react";
import Form from "./Form";

const Item = ({ education, onRemove, onDelete }) => {
    const [formIsVisible, setFormIsVisible] = useState(
        education.openFormByDefault ?? false
    );

    const toggleFormVisibility = () => {
        setFormIsVisible((oldState) => {
            return !oldState;
        });
    };

    const onRemoveHandler = (e) => {
        e.stopPropagation();
        if (education.temp_id) {
            onRemove();
        } else {
            onDelete();
        }
    };

    const closeForm = () => {
        setFormIsVisible(false);
    };

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
                    <h5>{education.school}</h5>
                </div>
                <div className="expand-btn">
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            {formIsVisible && (
                <Form education={education} onCloseForm={closeForm} />
            )}
        </div>
    );
};

export default Item;
