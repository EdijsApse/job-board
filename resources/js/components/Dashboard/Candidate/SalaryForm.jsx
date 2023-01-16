import { useState } from "react";
import BaseFormInput from "../../UI/BaseFormInput";
import BaseFormSelect from "../../UI/BaseFormSelect";
import DashboardCard from "../../UI/DashboardCard";
import LoadingSpinner from "../../UI/LoadingSpinner";

const SalaryForm = () => {
    const isLoading = false;
    const errors = {};

    const [salaryType, setSalaryType] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");

    const submitSalaryHandler = (e) => {
        e.preventDefault();
    };

    const salaryTypes = [];

    return (
        <DashboardCard className="relative">
            {isLoading && <LoadingSpinner />}
            <form className="dashboard-form" onSubmit={submitSalaryHandler}>
                <div className="row">
                    <div className="col-6">
                        <BaseFormSelect
                            id="salary-type"
                            labelName="Salary Type"
                            labelClassName="bold"
                            selected={salaryType}
                            selectValue={(type) => {
                                setSalaryType(type);
                            }}
                            placeholder="Select salary type"
                            options={salaryTypes}
                            inputErrorMessage={errors.type}
                            isRequired
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <BaseFormInput
                            id="salary-min"
                            labelName="Min($)"
                            labelClassName="bold"
                            value={minSalary}
                            setInputValue={(salary) => {
                                setMinSalary(salary);
                            }}
                            inputErrorMessage={errors.min}
                            isRequired
                        />
                    </div>
                    <div className="col-6">
                        <BaseFormInput
                            id="salary-max"
                            labelName="Max($)"
                            labelClassName="bold"
                            value={maxSalary}
                            setInputValue={(salary) => {
                                setMaxSalary(salary);
                            }}
                            inputErrorMessage={errors.max}
                            isRequired
                        />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Save Salary
                </button>
            </form>
        </DashboardCard>
    );
};

export default SalaryForm;
