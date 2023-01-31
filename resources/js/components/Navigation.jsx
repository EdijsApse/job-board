import Logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/slices/auth";

const Navigation = () => {
    const user = useSelector((state) => state.auth.user);
    const isEmployer = user && user.is_employer;
    const isCandidate = user && user.is_candidate;
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
                        {user && (
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
                    {!user && (
                        <button
                            className="btn btn-secondary"
                            onClick={showAuthModalHandler}
                        >
                            Login / Register
                        </button>
                    )}
                    {user && (
                        <button className="btn btn-secondary" onClick={logout}>
                            Logout
                        </button>
                    )}
                    {isEmployer && (
                        <NavLink to="/jobs/create" className="btn btn-primary">
                            Job Post
                        </NavLink>
                    )}
                    {isCandidate && (
                        <NavLink
                            to="/dashboard/resume"
                            className="btn btn-primary"
                        >
                            Update Resume
                        </NavLink>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
