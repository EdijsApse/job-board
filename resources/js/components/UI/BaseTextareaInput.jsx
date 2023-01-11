const BaseTextareaInput = ({
    id,
    labelName,
    isRequired = false,
    inputErrorMessage,
    value,
    setNewValue,
}) => {
    const onChangeHandler = (e) => {
        setNewValue(e.target.value);
    };

    return (
        <div className={`form-group ${inputErrorMessage ? "with-error" : ""}`}>
            <label htmlFor={id}>
                {labelName}
                {isRequired && <span className={"asterisk"}>*</span>}
            </label>
            <textarea
                id={id}
                className="form-control"
                onChange={onChangeHandler}
                value={value}
            ></textarea>
            {inputErrorMessage && (
                <p className="input-error">{inputErrorMessage}</p>
            )}
        </div>
    );
};

export default BaseTextareaInput;
