import Wrapper from "./UI/Wrapper";
import logo from "./assets/logo.png";

const Footer = () => {
    return (
        <footer>
            <Wrapper className={"top-row"}>
                <div className="footer-grid">
                    <div className="footer-col">
                        <a href="/" className="footers-site-logo">
                            <img src={logo} alt="We Work logo" />
                        </a>
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
                                <a href="">Browse Jobs</a>
                            </li>
                            <li>
                                <a href="">Browse Candidates</a>
                            </li>
                            <li>
                                <a href="">Candidate Dashboard</a>
                            </li>
                            <li>
                                <a href="">Job Alerts</a>
                            </li>
                            <li>
                                <a href="">My Bookmarks</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h6>For Employers</h6>
                        <ul>
                            <li>
                                <a href="">All Employers</a>
                            </li>
                            <li>
                                <a href="">Employer Dashboard</a>
                            </li>
                            <li>
                                <a href="">Submit Job</a>
                            </li>
                            <li>
                                <a href="">Job Packages</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h6>About Us</h6>
                        <ul>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Terms</a>
                            </li>
                            <li>
                                <a href="">Packages</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h6>Helpful Resources</h6>
                        <ul>
                            <li>
                                <a href="">Site Map</a>
                            </li>
                            <li>
                                <a href="">Terms of Use</a>
                            </li>
                            <li>
                                <a href="">Privacy Center</a>
                            </li>
                            <li>
                                <a href="">Security Center</a>
                            </li>
                            <li>
                                <a href="">Accessibility Center</a>
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
