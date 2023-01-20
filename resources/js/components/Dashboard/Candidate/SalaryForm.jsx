import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSalaryDetails,
    updateSalaryDetails,
} from "../../../store/thunks/resume";
import BaseFormInput from "../../UI/BaseFormInput";
import BaseFormSelect from "../../UI/BaseFormSelect";
import BaseTextareaInput from "../../UI/BaseTextareaInput";
import DashboardCard from "../../UI/DashboardCard";
import LoadingSpinner from "../../UI/LoadingSpinner";

const SalaryForm = () => {
    const isLoading = useSelector((state) => state.resume.salary.isLoading);
    const errors = useSelector((state) => state.resume.salary.errors);
    const details = useSelector((state) => state.resume.salary.details);

    const [salaryType, setSalaryType] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [notes, setNotes] = useState("");

    const dispatch = useDispatch();

    const submitSalaryHandler = (e) => {
        e.preventDefault();
        const details = {
            type_id: salaryType,
            min_salary: minSalary,
            max_salary: maxSalary,
            notes: notes,
        };
        dispatch(updateSalaryDetails(details));
    };

    useEffect(() => {
        dispatch(getSalaryDetails());
    }, []);

    useEffect(() => {
        if (details.id) {
            setSalaryType(details.type_id);
            setMinSalary(details.min_salary);
            setMaxSalary(details.max_salary);
            setNotes(details.notes ?? '');
        }
    }, [details, setSalaryType, setMinSalary, setMaxSalary, setNotes]);

    const salaryTypes = useSelector((state) => state.selectOptions.salaryTypes);

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
                            inputErrorMessage={errors.type_id}
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
                            inputErrorMessage={errors.min_salary}
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
                            inputErrorMessage={errors.max_salary}
                            isRequired
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <BaseTextareaInput
                            id="salary-notes"
                            labelName="Some notes about salary"
                            labelClassName="bold"
                            value={notes}
                            setNewValue={(notes) => {
                                setNotes(notes);
                            }}
                            inputErrorMessage={errors.notes}
                        />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Save Details
                </button>
            </form>
        </DashboardCard>
    );
};

export default SalaryForm;
