import { Fragment, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/thunks/auth";
import LoadingSpinner from "../UI/LoadingSpinner";
import UserTypeSelect from "./UserTypeSelect";

const RegisterModalBody = () => {
    const [selectedType, setSelectedType] = useState();
    const [isAcceptedToTerms, setIsAcceptedToTerms] = useState(null);

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

    const emailRef = useRef();
    const passwordConfirmRef = useRef();
    const passwordRef = useRef();

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
                email: emailRef.current.value,
                password: passwordRef.current.value,
                password_confirmation: passwordConfirmRef.current.value,
            })
        );
    };

    return (
        <Fragment>
            <h2>Create a free WeWork account</h2>
            {isLoading && <LoadingSpinner />}
            <div className="account-type-wrapper">
                <UserTypeSelect onTypeSelected={typeSelectHandler} />
                {errors.user_type && (
                    <p className="input-error">{errors.user_type}</p>
                )}
            </div>
            <form className="register-form" onSubmit={registerFormHandler}>
                <div
                    className={`form-group ${errors.email ? "with-error" : ""}`}
                >
                    <label htmlFor="email">
                        Email<sup className="asterisk">*</sup>
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        ref={emailRef}
                    />
                    {errors.email && (
                        <p className="input-error">{errors.email}</p>
                    )}
                </div>
                <div
                    className={`form-group ${
                        errors.password ? "with-error" : ""
                    }`}
                >
                    <label htmlFor="password">
                        Password<sup className="asterisk">*</sup>
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        ref={passwordRef}
                    />
                    {errors.password && (
                        <p className="input-error">{errors.password}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="confirm">
                        Confirm Password<sup className="asterisk">*</sup>
                    </label>
                    <input
                        id="confirm"
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control"
                        ref={passwordConfirmRef}
                    />
                </div>
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
