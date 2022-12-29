import Logo from "./assets/logo.png";

const Navigation = () => {
    return (
        <div className="fixed-navigation">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="WeWork logo" />
                </a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">
                            Home
                        </a>
                        <a className="nav-item nav-link" href="#">
                            Find job
                        </a>
                        <a className="nav-item nav-link" href="#">
                            Employers
                        </a>
                        <a className="nav-item nav-link" href="#">
                            Candidates
                        </a>
                    </div>
                </div>
                <div className="auth-buttons">
                    <button className="btn btn-secondary">
                        Login / Register
                    </button>
                    <button className="btn btn-primary">Job Post</button>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
