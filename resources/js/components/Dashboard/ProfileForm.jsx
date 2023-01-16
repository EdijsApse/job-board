import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileDetails } from "../../store/thunks/profile";
import BaseFormInput from "../UI/BaseFormInput";
import BaseFormSelect from "../UI/BaseFormSelect";
import DashboardCard from "../UI/DashboardCard";
import ImagePicker from "../UI/ImagePicker";
import LoadingSpinner from "../UI/LoadingSpinner";

const ProfileForm = () => {
    const isLoading = useSelector((state) => state.profile.isLoading);
    const errors = useSelector((state) => state.profile.errors);

    const userProfile = useSelector((state) => {
        const user = state.auth.user;
        return user && user.profile ? user.profile : {};
    });

    const [name, setName] = useState(userProfile.name ?? "");
    const [surname, setSurname] = useState(userProfile.surname ?? "");
    const [dateOfBirth, setDateOfBirth] = useState(
        userProfile.date_of_birth ?? ""
    );
    const [phone, setPhone] = useState(userProfile.phone ?? "");
    const [gender, setGender] = useState(userProfile.gender ?? "");
    const [imageFile, setImageFile] = useState(null);

    const fileSelectedHandler = (file) => {
        setImageFile(file);
    };
    const fileRemovedHandler = () => {
        setImageFile(null);
    };

    const dispatch = useDispatch();

    const submitProfileDetailsHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("name", name);
        formData.append("surname", surname);
        formData.append("phone", phone);
        formData.append("gender", gender);
        formData.append("date_of_birth", dateOfBirth);
        if (imageFile) {
            formData.append("image", imageFile);
        }

        dispatch(updateProfileDetails(formData));
    };

    const genders = useSelector((state) => state.selectOptions.genders);

    return (
        <DashboardCard className="relative">
            {isLoading && <LoadingSpinner />}
            <form
                className="dashboard-form"
                onSubmit={submitProfileDetailsHandler}
            >
                <div className="row">
                    <div className="col-12">
                        <ImagePicker
                            labelText="Profile Image"
                            existingImage={userProfile.image}
                            onFileSelected={fileSelectedHandler}
                            onFileRemoved={fileRemovedHandler}
                            errorMessage={errors.image}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <BaseFormInput
                            id="profile-name"
                            labelName="First name"
                            labelClassName="bold"
                            value={name}
                            setInputValue={(name) => {
                                setName(name);
                            }}
                            inputErrorMessage={errors.name}
                            isRequired
                        />
                    </div>
                    <div className="col-6">
                        <BaseFormInput
                            id="profile-surname"
                            labelName="Last name"
                            labelClassName="bold"
                            value={surname}
                            setInputValue={(surname) => {
                                setSurname(surname);
                            }}
                            inputErrorMessage={errors.surname}
                            isRequired
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <BaseFormInput
                            id="profile-phone"
                            labelName="Phone"
                            labelClassName="bold"
                            value={phone}
                            setInputValue={(phone) => {
                                setPhone(phone);
                            }}
                            inputErrorMessage={errors.phone}
                            isRequired
                        />
                    </div>
                    <div className="col-6">
                        <BaseFormInput
                            id="profile-date-of-birth"
                            labelName="Date Of Birth"
                            labelClassName="bold"
                            value={dateOfBirth}
                            setInputValue={(date) => {
                                setDateOfBirth(date);
                            }}
                            inputErrorMessage={errors.date_of_birth}
                            type="date"
                            isRequired
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <BaseFormSelect
                            id="profile-gender"
                            labelName="Gender"
                            labelClassName="bold"
                            selected={gender}
                            selectValue={(gender) => {
                                setGender(gender);
                            }}
                            placeholder="Select gender"
                            options={genders}
                            inputErrorMessage={errors.gender}
                            isRequired
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

export default ProfileForm;
