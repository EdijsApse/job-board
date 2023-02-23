import BaseFormInput from "../UI/BaseFormInput";
import BaseFormSelect from "../UI/BaseFormSelect";
import BaseTextareaInput from "../UI/BaseTextareaInput";
import ImagePicker from "../UI/ImagePicker";
import RemovableList from "../UI/RemovableList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const JobForm = ({ onFormSubmit, errors, initialJob = {}, buttonLabel }) => {
    const employmentTypeOptions = useSelector(
        (state) => state.selectOptions.employmentTypes
    );
    const cityOptions = useSelector((state) => state.selectOptions.cities);
    const categoryOptions = useSelector(
        (state) => state.selectOptions.categories
    );
    const salaryTypeOptions = useSelector(
        (state) => state.selectOptions.salaryTypes
    );

    const jobId = initialJob.id;

    const [jobTitle, setJobTitle] = useState("");
    const [image, setImage] = useState(null);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [category, setCategory] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [salaryType, setSalaryType] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [expDate, setExpDate] = useState("");
    const [experience, setExperience] = useState("");
    const [responsibilitiesList, setResponsibilitiesList] = useState([]);
    const [requirementsList, setRequirementsList] = useState([]);
    const [isUrgent, setIsUrgent] = useState(false);
    const [isFeatured, setIsFeatured] = useState(false);

    const [requirement, setRequirement] = useState("");
    const [responsibility, setResponsibility] = useState("");

    const fileSelectedHandler = (file) => {
        setImage(file);
    };

    const fileRemovedHandler = () => {
        setImage(null);
    };

    const addRequirementHandler = () => {
        const exists = requirementsList.findIndex((req) => req === requirement);
        if (requirement.trim() && exists === -1) {
            setRequirementsList((list) => [...list, requirement]);
        }
        setRequirement("");
    };

    const removeRequirementHandler = (req) => {
        setRequirementsList((list) =>
            list.filter((existingReq) => existingReq !== req)
        );
    };

    const addResposibilityHandler = () => {
        const exists = responsibilitiesList.findIndex(
            (res) => res === responsibility
        );
        if (responsibility.trim() && exists === -1) {
            setResponsibilitiesList((list) => [...list, responsibility]);
        }
        setResponsibility("");
    };

    const removeResposibilityHandler = (res) => {
        setResponsibilitiesList((list) =>
            list.filter((existingRes) => existingRes !== res)
        );
    };

    const submitJobHandler = (e) => {
        e.preventDefault();

        const jobData = new FormData();

        jobData.append("jobtitle", jobTitle);
        jobData.append("street", street);
        jobData.append("city_id", city);
        jobData.append("category_id", category);
        jobData.append("employment_type_id", employmentType);
        jobData.append("min_salary", minSalary);
        jobData.append("max_salary", maxSalary);
        jobData.append("salary_type_id", salaryType);
        jobData.append("description", jobDescription);
        jobData.append("expiration_date", expDate);
        jobData.append("years_of_experience_required", experience);
        jobData.append("is_urgent", isUrgent ? 1 : 0);
        jobData.append("is_featured", isFeatured ? 1 : 0);

        if (image) {
            jobData.append("image", image);
        }

        responsibilitiesList.forEach((res) => {
            jobData.append("responsibilities[]", res);
        });

        requirementsList.forEach((req) => {
            jobData.append("requirements[]", req);
        });

        onFormSubmit(jobData);
    };

    useEffect(() => {
        if (jobId) {
            setJobTitle(initialJob.jobtitle);
            setStreet(initialJob.street);
            setCity(initialJob.city_id);
            setCategory(initialJob.category_id);
            setEmploymentType(initialJob.employment_type_id);
            setMinSalary(initialJob.min_salary);
            setMaxSalary(initialJob.max_salary);
            setSalaryType(initialJob.salary_type_id);
            setJobDescription(initialJob.description);
            setExpDate(initialJob.expiration_date);
            setExperience(initialJob.years_of_experience_required ?? "");
            setResponsibilitiesList(initialJob.responsibilities ?? []);
            setRequirementsList(initialJob.requirements ?? []);
            setIsUrgent(initialJob.is_urgent);
            setIsFeatured(initialJob.is_featured);
        }
    }, [jobId]);

    return (
        <form onSubmit={submitJobHandler}>
            <div className="row">
                <div className="col-12">
                    <ImagePicker
                        labelText="Job Image"
                        existingImage={initialJob.image ?? null}
                        onFileSelected={fileSelectedHandler}
                        onFileRemoved={fileRemovedHandler}
                        errorMessage={errors.image}
                    />
                </div>
            </div>
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
                        inputErrorMessage={errors.jobtitle}
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
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
                        inputErrorMessage={errors.city_id}
                        isRequired
                    />
                </div>
                <div className="col-6">
                    <BaseFormInput
                        id="street"
                        labelClassName="bold"
                        labelName="Street"
                        value={street}
                        setInputValue={(street) => {
                            setStreet(street);
                        }}
                        inputErrorMessage={errors.street}
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
                        inputErrorMessage={errors.category_id}
                        isRequired
                    />
                </div>
                <div className="col-6">
                    <BaseFormSelect
                        id="employment-type"
                        labelClassName="bold"
                        labelName="Employment Type"
                        selected={employmentType}
                        selectValue={(value) => {
                            setEmploymentType(value);
                        }}
                        placeholder="Select employment type"
                        options={employmentTypeOptions}
                        inputErrorMessage={errors.employment_type_id}
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <BaseFormInput
                        id="min-salary"
                        labelClassName="bold"
                        labelName="Min Salary"
                        value={minSalary}
                        setInputValue={(value) => {
                            setMinSalary(value);
                        }}
                        type="number"
                        inputErrorMessage={errors.min_salary}
                        isRequired
                    />
                </div>
                <div className="col-4">
                    <BaseFormInput
                        id="max-salary"
                        labelClassName="bold"
                        labelName="Max Salary"
                        value={maxSalary}
                        setInputValue={(value) => {
                            setMaxSalary(value);
                        }}
                        type="number"
                        inputErrorMessage={errors.max_salary}
                        isRequired
                    />
                </div>
                <div className="col-4">
                    <BaseFormSelect
                        id="salary-type"
                        labelClassName="bold"
                        labelName="Salary type"
                        selected={salaryType}
                        selectValue={(value) => {
                            setSalaryType(value);
                        }}
                        placeholder="Select salary type"
                        options={salaryTypeOptions}
                        inputErrorMessage={errors.salary_type_id}
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
                        inputErrorMessage={errors.description}
                        isRequired
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="removable-list-with-input">
                        <BaseTextareaInput
                            id="job-requirement"
                            labelName="List of Job Requirements"
                            labelClassName="bold"
                            value={requirement}
                            setNewValue={(value) => {
                                setRequirement(value);
                            }}
                        />
                        <RemovableList
                            list={requirementsList}
                            onRemoveItem={removeRequirementHandler}
                            onAddItem={addRequirementHandler}
                            actionText="Add Requirement"
                        />
                        {errors.requirements && (
                            <p className="input-error">{errors.requirements}</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="removable-list-with-input">
                        <BaseTextareaInput
                            id="job-responsibility"
                            labelName="List of Job Responsibilities"
                            labelClassName="bold"
                            value={responsibility}
                            setNewValue={(value) => {
                                setResponsibility(value);
                            }}
                        />
                        <RemovableList
                            list={responsibilitiesList}
                            onRemoveItem={removeResposibilityHandler}
                            onAddItem={addResposibilityHandler}
                            actionText="Add Resposibility"
                        />
                        {errors.responsibilities && (
                            <p className="input-error">
                                {errors.responsibilities}
                            </p>
                        )}
                    </div>
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
                        inputErrorMessage={errors.expiration_date}
                        isRequired
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <BaseFormInput
                        id="experience"
                        labelClassName="bold"
                        labelName="Experience (Years)"
                        value={experience}
                        setInputValue={(value) => {
                            setExperience(value);
                        }}
                        inputErrorMessage={errors.years_of_experience_required}
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
                                value={isFeatured}
                                checked={isFeatured}
                                onChange={() => {
                                    setIsFeatured((oldValue) => !oldValue);
                                }}
                            />
                            <label
                                className="bold form-check-label"
                                htmlFor="is_featured"
                            >
                                Featured Job
                            </label>
                        </div>
                        {errors.is_featured && (
                            <p className="input-error mb-2">
                                {errors.is_featured}
                            </p>
                        )}
                        <div className="form-switch">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="is_urgent"
                                value={isUrgent}
                                checked={isUrgent}
                                onChange={() => {
                                    setIsUrgent((oldValue) => !oldValue);
                                }}
                            />
                            <label
                                className="bold form-check-label"
                                htmlFor="is_urgent"
                            >
                                Actively recruiting new employers
                            </label>
                        </div>
                        {errors.is_urgent && (
                            <p className="input-error mb-2">
                                {errors.is_urgent}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <button className="btn btn-primary submit-job">
                {buttonLabel}
            </button>
        </form>
    );
};

export default JobForm;
