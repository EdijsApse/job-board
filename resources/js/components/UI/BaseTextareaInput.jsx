const BaseTextareaInput = ({
    id,
    labelName,
    labelClassName = "",
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
            <label htmlFor={id} className={labelClassName}>
                {labelName}
                {isRequired && <sup className={"asterisk"}>*</sup>}
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
