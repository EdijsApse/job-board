import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/thunks/auth";
import BaseFormInput from "../UI/BaseFormInput";
import LoadingSpinner from "../UI/LoadingSpinner";
import UserTypeSelect from "./UserTypeSelect";

const RegisterModalBody = () => {
    const [selectedType, setSelectedType] = useState("");
    const [isAcceptedToTerms, setIsAcceptedToTerms] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const isLoading = useSelector((state) => state.auth.isLoading);
    const errors = useSelector((state) => state.auth.registerFormErrors);

    const typeSelectHandler = (type) => {
        setSelectedType(type);
    };

    const onTermsAcceptedChange = (e) => {
        setIsAcceptedToTerms(e.target.checked);
    };

    const authDispatch = useDispatch();

    const onLoginClickHandler = () => {
        authDispatch(authActions.showLoginModal());
    };

    const registerFormHandler = (e) => {
        e.preventDefault();
        if (isAcceptedToTerms === null) {
            setIsAcceptedToTerms(false);
            return;
        }

        if (!isAcceptedToTerms) {
            return;
        }

        authDispatch(
            register({
                user_type: selectedType,
                email: email,
                password: password,
                password_confirmation: passwordConfirm,
            })
        );
    };

    return (
        <Fragment>
            <h2>Create a free WeWork account</h2>
            {isLoading && <LoadingSpinner />}
            <div className="account-type-wrapper">
                <UserTypeSelect
                    selectType={typeSelectHandler}
                    selectedType={selectedType}
                />
                {errors.user_type && (
                    <p className="input-error">{errors.user_type}</p>
                )}
            </div>
            <form className="register-form" onSubmit={registerFormHandler}>
                <BaseFormInput
                    id="email"
                    labelName="Email"
                    type="email"
                    value={email}
                    setInputValue={(value) => {
                        setEmail(value);
                    }}
                    inputErrorMessage={errors.email}
                    placeholder="Email"
                    isRequired
                />

                <BaseFormInput
                    id="password"
                    labelName="Password"
                    type="password"
                    value={password}
                    setInputValue={(value) => {
                        setPassword(value);
                    }}
                    inputErrorMessage={errors.password}
                    placeholder="Password"
                    isRequired
                />

                <BaseFormInput
                    id="confirm"
                    labelName="Confirm Password"
                    type="password"
                    value={passwordConfirm}
                    setInputValue={(value) => {
                        setPasswordConfirm(value);
                    }}
                    inputErrorMessage={errors.confirm}
                    placeholder="Confirm Password"
                    isRequired
                />
                <div className="form-check">
                    <input
                        id="terms"
                        className="form-check-input"
                        type="checkbox"
                        onChange={onTermsAcceptedChange}
                    />
                    <label className="form-check-label" htmlFor="terms">
                        You accept our Terms and Conditions and Privacy Policy
                    </label>
                </div>
                {isAcceptedToTerms === false && (
                    <p className="input-error">Accept our terms of service!</p>
                )}
                <button className="btn btn-primary">Register Now</button>
            </form>
            <p className="auth-footer-link">
                Already have an account?
                <span className="link-text" onClick={onLoginClickHandler}>
                    Login
                </span>
            </p>
        </Fragment>
    );
};

export default RegisterModalBody;
