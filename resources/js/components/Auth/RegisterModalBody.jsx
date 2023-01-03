import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/auth";

const TYPE_CANDIDATE = 1;
const TYPE_EMPLOYER = 2;

const RegisterModalBody = () => {
    const [selectedType, setSelectedType] = useState(TYPE_CANDIDATE);
    const authDispatch = useDispatch();
    const onLoginClickHandler = () => {
        authDispatch(authActions.showLoginModal());
    };

    const selectEmployerTypeHandler = () => {
        setSelectedType(TYPE_EMPLOYER);
    };
    const selectCandidateTypeHandler = () => {
        setSelectedType(TYPE_CANDIDATE);
    };

    const registerFormHandler = (e) => {
        e.preventDefault();
        authDispatch(authActions.register({ email: "email" }));
    };

    return (
        <Fragment>
            <h2>Create a free WeWork account</h2>
            <div className="account-types">
                <button
                    className={`btn btn-acc-type ${
                        selectedType === TYPE_CANDIDATE ? "selected" : ""
                    }`}
                    onClick={selectCandidateTypeHandler}
                >
                    <i className="fa-solid fa-user"></i>
                    <span>Candidate</span>
                </button>
                <button
                    className={`btn btn-acc-type ${
                        selectedType === TYPE_EMPLOYER ? "selected" : ""
                    }`}
                    onClick={selectEmployerTypeHandler}
                >
                    <i className="fa-solid fa-briefcase"></i>
                    <span>Employer</span>
                </button>
            </div>
            <form className="register-form" onSubmit={registerFormHandler}>
                <div className="form-group">
                    <label htmlFor="email">
                        Email<sup className="asterisk">*</sup>
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password<sup className="asterisk">*</sup>
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                    />
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
                    />
                </div>
                <div className="form-check">
                    <input
                        id="terms"
                        className="form-check-input"
                        type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="terms">
                        You accept our Terms and Conditions and Privacy Policy
                    </label>
                </div>
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
