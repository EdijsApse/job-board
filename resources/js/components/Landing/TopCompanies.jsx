import Wrapper from "../UI/Wrapper";
import Carousel from "../UI/Carousel";
import SingleTopCompany from "./SingleTopCompany";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const TopCompanies = () => {
    const companies = useSelector((state) => state.landing.featuredCompanies);

    if (!companies.length) {
        return;
    }

    return (
        <Wrapper className={"landing-section top-companies"}>
            <div className="section-header">
                <div className="left-col">
                    <h2 className="section-title">Top Company Registered</h2>
                    <p className="section-subtitle">
                        Some of the companies we’ve helped recruit excellent
                        applicants over the years.
                    </p>
                </div>
                <div className="right-col">
                    <NavLink to="/employers">Browse all companies</NavLink>
                </div>
            </div>
            <div className="top-companies-carousel">
                <Carousel>
                    {companies.map((company) => (
                        <SingleTopCompany key={company.id} company={company} />
                    ))}
                </Carousel>
            </div>
        </Wrapper>
    );
};

export default TopCompanies;
