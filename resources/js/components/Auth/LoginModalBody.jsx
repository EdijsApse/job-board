import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/auth";

const LoginModalBody = () => {
    const authDispatch = useDispatch();

    const onRegisterClickHandler = () => {
        authDispatch(authActions.showRegisterModal());
    };

    const onForgotPasswordClick = () => {
        authDispatch(authActions.showForgotPasswordModal());
    };

    const loginFormHandler = (e) => {
        e.preventDefault();
        authDispatch(authActions.login({ email: 'email' }));
    };

    return (
        <Fragment>
            <h2>Login to WeWork</h2>
            <form onSubmit={loginFormHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                    />
                </div>
                <div className="forgot-password-container">
                    <div className="form-check">
                        <input
                            id="remember"
                            className="form-check-input"
                            type="checkbox"
                        />
                        <label className="form-check-label" htmlFor="remember">
                            Keep me signed in
                        </label>
                    </div>
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
