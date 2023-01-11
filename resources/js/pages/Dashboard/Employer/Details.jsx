import { useState } from "react";
import BaseFormInput from "../../../components/UI/BaseFormInput";
import BaseFormSelect from "../../../components/UI/BaseFormSelect";
import BaseTextareaInput from "../../../components/UI/BaseTextareaInput";
import DashboardCard from "../../../components/UI/DashboardCard";

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
const sizeOptions = [
    {
        value: "1",
        label: "1-5 Employers",
    },
];

const Details = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPhone, setCompanyPhone] = useState("");
    const [aboutCompany, setAboutCompany] = useState("");
    const [companyFoundedYear, setCompanyFoundedYear] = useState("");
    const [companyCategory, setCompanyCategory] = useState("");
    const [companyCity, setCompanyCity] = useState("");
    const [companyCountry, setCompanyCountry] = useState("");
    const [companySize, setCompanySize] = useState("");

    const submitCompanyDetailsHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="dashboard-page">
            <h1 className="page-title">Company details</h1>
            <DashboardCard>
                <form
                    className="dashboard-form"
                    onSubmit={submitCompanyDetailsHandler}
                >
                    <div className="row">
                        <div className="col-6">
                            <BaseFormInput
                                id="company-name"
                                labelName="Company Name"
                                value={companyName}
                                setInputValue={(name) => {
                                    setCompanyName(name);
                                }}
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-category"
                                labelName="Company Category"
                                selected={companyCategory}
                                selectValue={(category) => {
                                    setCompanyCategory(category);
                                }}
                                options={categoryOptions}
                                placeholder="Select comapny category"
                                isRequired
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-city"
                                labelName="City"
                                selected={companyCity}
                                selectValue={(city) => {
                                    setCompanyCity(city);
                                }}
                                options={cityOptions}
                                placeholder="Select city where located"
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-country"
                                labelName="Country"
                                selected={companyCountry}
                                selectValue={(country) => {
                                    setCompanyCountry(country);
                                }}
                                placeholder="Select country where located"
                                options={countryOptions}
                                isRequired
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <BaseFormInput
                                id="company-email"
                                labelName="Contact email"
                                type="email"
                                value={companyEmail}
                                setInputValue={(value) => {
                                    setCompanyEmail(value);
                                }}
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormInput
                                id="company-phone"
                                labelName="Contact phone"
                                value={companyPhone}
                                setInputValue={(value) => {
                                    setCompanyPhone(value);
                                }}
                                isRequired
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <BaseFormSelect
                                id="company-size"
                                labelName="Company size"
                                selected={companySize}
                                selectValue={(size) => {
                                    setCompanySize(size);
                                }}
                                options={sizeOptions}
                                placeholder="Select company size"
                                isRequired
                            />
                        </div>
                        <div className="col-6">
                            <BaseFormInput
                                id="founded-year"
                                labelName="Founded year"
                                type="number"
                                value={companyFoundedYear}
                                setInputValue={(value) => {
                                    setCompanyFoundedYear(value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <BaseTextareaInput
                                id="company-about"
                                labelName="About Company"
                                value={aboutCompany}
                                setNewValue={(value) => {
                                    setAboutCompany(value);
                                }}
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
