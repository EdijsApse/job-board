import { useRef } from "react";

const SkillsListInput = ({
    items,
    onSkillAdded,
    onSkillRemove,
    errorMessage,
}) => {
    const inputRef = useRef();
    const onSkillSubmitHandler = () => {
        onSkillAdded(inputRef.current.value);
        inputRef.current.value = "";
    };

    const removeSkillHandler = (skill) => {
        onSkillRemove(skill);
    };

    return (
        <div className="skills-list-input-wrapper">
            <div className="form-group">
                <label htmlFor="skills-input" className="bold">
                    Add skill
                </label>
                <div className="input-with-button">
                    <input
                        type="text"
                        id="skills-input"
                        className="form-control"
                        ref={inputRef}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={onSkillSubmitHandler}
                    >
                        Add to the list
                    </button>
                </div>
                {errorMessage && <p className="input-error">{errorMessage}</p>}
            </div>
            <ul className="skills-list">
                {items.map((skill) => {
                    return (
                        <li key={skill}>
                            <span>{skill}</span>
                            <i
                                className="fa-solid fa-xmark"
                                onClick={removeSkillHandler.bind(null, skill)}
                            ></i>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SkillsListInput;
