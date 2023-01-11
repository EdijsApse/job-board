const BaseFormInput = ({
    id,
    value,
    labelName,
    labelClassName = "",
    setInputValue,
    isRequired = false,
    type = "text",
    placeholder = "",
    inputErrorMessage,
}) => {
    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div className={`form-group ${inputErrorMessage ? "with-error" : ""}`}>
            <label htmlFor={id} className={labelClassName}>
                {labelName}
                {isRequired && <sup className={"asterisk"}>*</sup>}
            </label>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                id={id}
                className="form-control"
                placeholder={placeholder}
            />
            {inputErrorMessage && (
                <p className="input-error">{inputErrorMessage}</p>
            )}
        </div>
    );
};

export default BaseFormInput;
