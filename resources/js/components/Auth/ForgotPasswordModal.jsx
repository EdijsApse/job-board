import { Fragment } from "react";

const ForgotPasswordModal = ({ onShowLoginModal }) => {
    const onLoginClickHandler = () => {
        onShowLoginModal();
    };
    return (
        <Fragment>
            <h2>Send reset password link</h2>
            <form className="forgot-password-form">
                <div className="form-group">
                    <div className="info-text">
                        <h6>Reset Password</h6>
                        <p>Please Enter Email</p>
                    </div>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Get New Password</button>
            </form>
            <span className="clickable" onClick={onLoginClickHandler}>
                Back To Login
            </span>
        </Fragment>
    );
};

export default ForgotPasswordModal;
