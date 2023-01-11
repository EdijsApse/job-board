const BaseFormSelect = ({
    id,
    labelName,
    labelClassName="",
    selected,
    selectValue,
    isRequired = false,
    options,
    inputErrorMessage,
    placeholder,
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
                    <option value={option.value} key={option.value}>
                        {option.label}
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
