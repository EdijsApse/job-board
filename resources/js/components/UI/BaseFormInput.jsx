const BaseFormInput = ({
    id,
    value,
    labelName,
    setInputValue,
    isRequired = false,
    type = "text",
    inputErrorMessage,
}) => {
    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className={`form-group ${inputErrorMessage ? "with-error" : ""}`}>
            <label htmlFor={id}>
                {labelName}
                {isRequired && <span className={"asterisk"}>*</span>}
            </label>
            <input type={type} value={value} onChange={onChangeHandler} id={id} className="form-control" />
            {inputErrorMessage && (
                <p className="input-error">{inputErrorMessage}</p>
            )}
        </div>
    );
};

export default BaseFormInput;
