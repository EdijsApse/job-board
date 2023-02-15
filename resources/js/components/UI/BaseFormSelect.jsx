const BaseFormSelect = ({
    id,
    labelName,
    labelClassName = "",
    selected,
    selectValue,
    isRequired = false,
    options,
    inputErrorMessage,
    placeholder,
    optionLabelName = "label",
    optionValueName = "value",
}) => {
    const onSelectHandler = (e) => {
        selectValue(e.target.value);
    };
    return (
        <div className={`form-group ${inputErrorMessage ? "with-error" : ""}`}>
            <label htmlFor={id} className={labelClassName}>
                {labelName}
                {isRequired && <sup className={"asterisk"}>*</sup>}
            </label>
            <select
                id={id}
                className="form-select"
                value={selected}
                onChange={onSelectHandler}
            >
                <option>{placeholder}</option>
                {options.map((option) => (
                    <option
                        value={option[optionValueName]}
                        key={option[optionValueName]}
                    >
                        {option[optionLabelName]}
                    </option>
                ))}
            </select>
            {inputErrorMessage && (
                <p className="input-error">{inputErrorMessage}</p>
            )}
        </div>
    );
};

export default BaseFormSelect;
