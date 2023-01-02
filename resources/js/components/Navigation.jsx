import Logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";

const Navigation = ({ showAuthModalHandler }) => {
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
                    <button
                        className="btn btn-secondary"
                        onClick={showAuthModalHandler}
                    >
                        Login / Register
                    </button>
                    <button className="btn btn-primary">Job Post</button>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
