import Wrapper from "./UI/Wrapper";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Wrapper className={"top-row"}>
                <div className="footer-grid">
                    <div className="footer-col">
                        <NavLink to="/" className="footers-site-logo">
                            <img src={logo} alt="We Work logo" />
                        </NavLink>
                        <h6>Call us</h6>
                        <a href="tel:1234567890" className="tel-link">
                            123 456 7890
                        </a>
                        <address>
                            123 Some Street, In some country
                            <br />
                            Some City with some ZIP Code
                        </address>
                        <a href="mail:email@example.com" className="email-link">
                            email@example.com
                        </a>
                    </div>
                    <div className="footer-col">
                        <h6>For Candidates</h6>
                        <ul>
                            <li>
                                <NavLink to="/jobs">Jobs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/candidates">Candidates</NavLink>
                            </li>
                            <li>
                                <NavLink to="/candidate-dashboard">
                                    Candidate Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/job-alerts">Job Alerts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-bookmarks">
                                    My Bookmarks
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h6>For Employers</h6>
                        <ul>
                            <li>
                                <NavLink to="/employers">All Employers</NavLink>
                            </li>
                            <li>
                                <NavLink to="/employer-dashboard">
                                    Employer Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/jobs/create">Submit Job</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pricings">Job Packages</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h6>About Us</h6>
                        <ul>
                            <li>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/terms">Terms</NavLink>
                            </li>
                            <li>
                                <NavLink to="/packages">Packages</NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq">FAQ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h6>Helpful Resources</h6>
                        <ul>
                            <li>
                                <NavLink to="/site-map">Site Map</NavLink>
                            </li>
                            <li>
                                <NavLink to="/terms">Terms of Use</NavLink>
                            </li>
                            <li>
                                <NavLink to="/privacy">Privacy Center</NavLink>
                            </li>
                            <li>
                                <NavLink to="/security">
                                    Security Center
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/accessibility">
                                    Accessibility Center
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
            <div className="bottom-row-wrapper">
                <Wrapper className={"bottom-row"}>
                    <p>© 2021 Superio. All Right Reserved.</p>
                    <div className="socials">
                        <a href="">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </Wrapper>
            </div>
        </footer>
    );
};

export default Footer;
