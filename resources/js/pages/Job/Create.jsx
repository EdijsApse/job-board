import BreadCrumbs from "../../components/UI/Breadcrumbs";
import Wrapper from "../../components/UI/Wrapper";
import BaseFormInput from "../../components/UI/BaseFormInput";
import { useState } from "react";
import BaseFormSelect from "../../components/UI/BaseFormSelect";
import BaseTextareaInput from "../../components/UI/BaseTextareaInput";

const categoryOptions = [
    {
        value: "advertising",
        label: "Advertising",
    },
];
const cityOptions = [
    {
        value: "riga",
        label: "Riga",
    },
];
const countryOptions = [
    {
        value: "latvia",
        label: "Latvia",
    },
];

const employmentTypeOptions = [
    {
        value: "part",
        label: "Part Time",
    },
    {
        value: "full",
        label: "Full Time",
    },
];

const qualificationOptions = [
    {
        value: "bachelor",
        label: "Bachelor Degree",
    },
];

const CreateJob = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [expDate, setExpDate] = useState("");
    const [qualification, setQualification] = useState("");
    const [experience, setExperience] = useState("");

    return (
        <div className="page create-job-page">
            <div className="page-header">
                <h1>Create Job</h1>
                <BreadCrumbs />
            </div>
            <main className="container-fluid">
                <Wrapper className="job-form-section">
                    <h2>Post Job</h2>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <BaseFormInput
                                    id="title"
                                    labelClassName="bold"
                                    labelName="Job Title"
                                    value={jobTitle}
                                    setInputValue={(value) => {
                                        setJobTitle(value);
                                    }}
                                    isRequired
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <BaseFormSelect
                                    id="country"
                                    labelName="Country"
                                    labelClassName="bold"
                                    selected={country}
                                    selectValue={(value) => {
                                        setCountry(value);
                                    }}
                                    placeholder="Select country"
                                    options={countryOptions}
                                    isRequired
                                />
                            </div>
                            <div className="col-6">
                                <BaseFormSelect
                                    id="city"
                                    labelName="City"
                                    labelClassName="bold"
                                    selected={city}
                                    selectValue={(value) => {
                                        setCity(value);
                                    }}
                                    placeholder="Select city"
                                    options={cityOptions}
                                    isRequired
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <BaseFormSelect
                                    id="category"
                                    labelName="Category"
                                    labelClassName="bold"
                                    selected={category}
                                    selectValue={(value) => {
                                        setCategory(value);
                                    }}
                                    placeholder="Select category"
                                    options={categoryOptions}
                                    isRequired
                                />
                            </div>
                            <div className="col-6">
                                <BaseFormSelect
                                    id="employment-type"
                                    labelClassName="bold"
                                    labelName="Type"
                                    selected={employmentType}
                                    selectValue={(value) => {
                                        setEmploymentType(value);
                                    }}
                                    placeholder="Select employment type"
                                    options={employmentTypeOptions}
                                    isRequired
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <BaseFormInput
                                    id="min-salary"
                                    labelClassName="bold"
                                    labelName="Min Salary"
                                    value={minSalary}
                                    setInputValue={(value) => {
                                        setMinSalary(value);
                                    }}
                                    type="number"
                                    isRequired
                                />
                            </div>
                            <div className="col-6">
                                <BaseFormInput
                                    id="max-salary"
                                    labelClassName="bold"
                                    labelName="Max Salary"
                                    value={maxSalary}
                                    setInputValue={(value) => {
                                        setMaxSalary(value);
                                    }}
                                    type="number"
                                    isRequired
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <BaseTextareaInput
                                    id="job-description"
                                    labelName="Job Description"
                                    labelClassName="bold"
                                    value={jobDescription}
                                    setNewValue={(value) => {
                                        setJobDescription(value);
                                    }}
                                    isRequired
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <BaseFormInput
                                    id="expiration-date"
                                    labelClassName="bold"
                                    labelName="Expiration date"
                                    value={expDate}
                                    setInputValue={(value) => {
                                        setExpDate(value);
                                    }}
                                    type="date"
                                    isRequired
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <BaseFormSelect
                                    id="qualification"
                                    labelClassName="bold"
                                    labelName="Qualification"
                                    selected={qualification}
                                    selectValue={(value) => {
                                        setQualification(value);
                                    }}
                                    placeholder="Select qualification level required"
                                    options={qualificationOptions}
                                />
                            </div>
                            <div className="col-6">
                                <BaseFormInput
                                    id="experience"
                                    labelClassName="bold"
                                    labelName="Experience (Years)"
                                    value={experience}
                                    setInputValue={(value) => {
                                        setExperience(value);
                                    }}
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="job-badges-switches">
                                    <h5>Job badges</h5>
                                    <div className="form-switch">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="is_featured"
                                        />
                                        <label
                                            className="bold form-check-label"
                                            htmlFor="is_featured"
                                        >
                                            Featured Job
                                        </label>
                                    </div>
                                    <div className="form-switch">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="is_urgent"
                                        />
                                        <label
                                            className="bold form-check-label"
                                            htmlFor="is_urgent"
                                        >
                                            Actively recruiting new employers
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary submit-job">
                            Create Job
                        </button>
                    </form>
                </Wrapper>
            </main>
        </div>
    );
};

export default CreateJob;
