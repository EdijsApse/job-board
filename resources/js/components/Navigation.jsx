import Logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth";

const Navigation = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const authDispatch = useDispatch();

    const showAuthModalHandler = () => {
        authDispatch(authActions.showLoginModal());
    };

    const logout = () => {
        authDispatch(authActions.logout());
    };

    return (
        <div className="fixed-navigation">
            <nav className="navbar navbar-expand-lg">
                <NavLink to="/" className="navbar-brand">
                    <img src={Logo} alt="WeWork logo" />
                </NavLink>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-item nav-link">
                            Home
                        </NavLink>
                        {isAuthenticated && (
                            <NavLink
                                to="/dashboard"
                                className="nav-item nav-link"
                            >
                                Dashboard
                            </NavLink>
                        )}
                        <NavLink to="/jobs" className="nav-item nav-link">
                            Jobs
                        </NavLink>
                        <NavLink to="/employers" className="nav-item nav-link">
                            Employers
                        </NavLink>
                        <NavLink to="/candidates" className="nav-item nav-link">
                            Candidates
                        </NavLink>
                    </div>
                </div>
                <div className="auth-buttons">
                    {!isAuthenticated && (
                        <button
                            className="btn btn-secondary"
                            onClick={showAuthModalHandler}
                        >
                            Login / Register
                        </button>
                    )}
                    {isAuthenticated && (
                        <button className="btn btn-secondary" onClick={logout}>
                            Logout
                        </button>
                    )}
                    <button className="btn btn-primary">Job Post</button>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
