import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseFormInput from "../../../components/UI/BaseFormInput";
import BaseFormSelect from "../../../components/UI/BaseFormSelect";
import BaseTextareaInput from "../../../components/UI/BaseTextareaInput";
import DashboardCard from "../../../components/UI/DashboardCard";
import ImagePicker from "../../../components/UI/ImagePicker";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import { updateCompanyDetails } from "../../../store/thunks/employer";

const Details = () => {
    const userCompany = useSelector((state) => {
        const user = state.auth.user;
        return user && user.company ? user.company : {};
    });

    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.employer.isLoading);
    const errors = useSelector((state) => state.employer.errors);

    const [companyName, setCompanyName] = useState(userCompany.name ?? "");
    const [companyEmail, setCompanyEmail] = useState(
        userCompany.contact_email ?? ""
    );
    const [companyPhone, setCompanyPhone] = useState(
        userCompany.contact_phone ?? ""
    );
    const [aboutCompany, setAboutCompany] = useState(userCompany.about ?? "");
    const [companyFoundedYear, setCompanyFoundedYear] = useState(
        userCompany.year_founded ?? ""
    );
    const [companyCategory, setCompanyCategory] = useState(
        userCompany.category_id ?? ""
    );
    const [companyCity, setCompanyCity] = useState(userCompany.city_id ?? "");
    const [companyCountry, setCompanyCountry] = useState(
        userCompany.country_id ?? ""
    );
    const [companySize, setCompanySize] = useState(
        userCompany.company_size_id ?? ""
    );

    const [selectedImage, setSelectedImage] = useState("");
    
    const countryOptions = useSelector(
        (state) => state.selectOptions.countries
    );
    const cityOptions = useSelector((state) => state.selectOptions.cities);
    const sizeOptions = useSelector(
        (state) => state.selectOptions.companySizes
    );
    const categoryOptions = useSelector(
        (state) => state.selectOptions.categories
    );

    const submitCompanyDetailsHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", companyName);
        formData.append("contact_email", companyEmail);
        formData.append("contact_phone", companyPhone);
        formData.append("year_founded", companyFoundedYear);
        formData.append("about", aboutCompany);
        formData.append("country_id", companyCountry);
        formData.append("city_id", companyCity);
        formData.append("category_id", companyCategory);
        formData.append("company_size_id", companySize);
        formData.append("file", selectedImage);

        dispatch(updateCompanyDetails(formData));
    };

    const fileSelectedHandler = (file) => {
        setSelectedImage(file);
    };

    const fileRemovedHandler = () => {
        if (selectedImage) {
            setSelectedImage("");
        }
    };

    return (
        <div className="dashboard-page">
            <h1 className="page-title">Company details</h1>
            <DashboardCard className="relative">
                {isLoading && <LoadingSpinner />}
                <form
                    className="dashboard-form"
                    onSubmit={submitCompanyDetailsHandler}
                >
                    <div className="row">
                        <div className="col-12">
                            <ImagePicker
                                labelText="Company logo"
                                existingImage={userCompany.logo}
                                onFileSelected={fileSelectedHandler}
                                onFileRemoved={fileRemovedHandler}
                                errorMessage={errors.file}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <BaseFormInput
                                id="company-name"
                                labelName="Company Name"
                                labelClassName="bold"
                                value={companyName}
                                setInputValue={(name) => {
                                    setCompanyName(name);
                                }}
                                inputErrorMessage={errors.name}
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-category"
                                labelName="Company Category"
                                labelClassName="bold"
                                selected={companyCategory}
                                selectValue={(category) => {
                                    setCompanyCategory(category);
                                }}
                                options={categoryOptions}
                                placeholder="Select company category"
                                inputErrorMessage={errors.category_id}
                                isRequired
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-city"
                                labelName="City"
                                labelClassName="bold"
                                selected={companyCity}
                                selectValue={(city) => {
                                    setCompanyCity(city);
                                }}
                                options={cityOptions}
                                placeholder="Select city where located"
                                inputErrorMessage={errors.city_id}
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-country"
                                labelName="Country"
                                labelClassName="bold"
                                selected={companyCountry}
                                selectValue={(country) => {
                                    setCompanyCountry(country);
                                }}
                                placeholder="Select country where located"
                                options={countryOptions}
                                inputErrorMessage={errors.country_id}
                                isRequired
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <BaseFormInput
                                id="company-email"
                                labelName="Contact email"
                                labelClassName="bold"
                                type="email"
                                value={companyEmail}
                                setInputValue={(value) => {
                                    setCompanyEmail(value);
                                }}
                                inputErrorMessage={errors.contact_email}
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormInput
                                id="company-phone"
                                labelName="Contact phone"
                                labelClassName="bold"
                                value={companyPhone}
                                setInputValue={(value) => {
                                    setCompanyPhone(value);
                                }}
                                inputErrorMessage={errors.contact_phone}
                                isRequired
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-size"
                                labelName="Company size"
                                labelClassName="bold"
                                selected={companySize}
                                selectValue={(size) => {
                                    setCompanySize(size);
                                }}
                                options={sizeOptions}
                                placeholder="Select company size"
                                inputErrorMessage={errors.company_size_id}
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormInput
                                id="founded-year"
                                labelName="Founded year"
                                labelClassName="bold"
                                type="number"
                                value={companyFoundedYear}
                                setInputValue={(value) => {
                                    setCompanyFoundedYear(value);
                                }}
                                inputErrorMessage={errors.year_founded}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <BaseTextareaInput
                                id="company-about"
                                labelName="About Company"
                                labelClassName="bold"
                                value={aboutCompany}
                                setNewValue={(value) => {
                                    setAboutCompany(value);
                                }}
                                inputErrorMessage={errors.about}
                                isRequired
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Save Details
                    </button>
                </form>
            </DashboardCard>
        </div>
    );
};
export default Details;
