import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/slices/auth";
import { login } from "../../store/thunks/auth";
import BaseFormInput from "../UI/BaseFormInput";
import LoadingSpinner from "../UI/LoadingSpinner";

const LoginModalBody = () => {
    const authDispatch = useDispatch();

    const isLoading = useSelector((state) => state.auth.isLoading);
    const errors = useSelector((state) => state.auth.loginFormErrors);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onRegisterClickHandler = () => {
        authDispatch(authActions.showRegisterModal());
    };

    const onForgotPasswordClick = () => {
        authDispatch(authActions.showForgotPasswordModal());
    };

    const loginFormHandler = (e) => {
        e.preventDefault();
        authDispatch(
            login({
                email: email,
                password: password,
            })
        );
    };

    return (
        <Fragment>
            <h2>Login to WeWork</h2>
            {isLoading && <LoadingSpinner />}
            <form onSubmit={loginFormHandler}>
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
                <div className="forgot-password-container">
                    <span className="clickable" onClick={onForgotPasswordClick}>
                        Forgotten password ?
                    </span>
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
            <div className="alternative-auth-text">
                <span className="stripe"></span>
                <span className="text">Or</span>
                <span className="stripe"></span>
            </div>
            <div className="auth-btns">
                <button className="btn btn-transparent btn-fb">
                    <i className="fa-brands fa-facebook-f"></i>
                    <span>Facebook</span>
                </button>
                <button className="btn btn-transparent btn-google">
                    <i className="fa-brands fa-google"></i>
                    <span>Google</span>
                </button>
                <button className="btn btn-transparent btn-linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                    <span>Linkedin</span>
                </button>
                <button className="btn btn-transparent btn-twitter">
                    <i className="fa-brands fa-twitter"></i>
                    <span>Twitter</span>
                </button>
            </div>
            <p className="auth-footer-link">
                Don't you have an account?{" "}
                <span className="link-text" onClick={onRegisterClickHandler}>
                    Register
                </span>
            </p>
        </Fragment>
    );
};

export default LoginModalBody;
