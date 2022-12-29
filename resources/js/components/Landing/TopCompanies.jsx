import Wrapper from "../UI/Wrapper";
import Carousel from "../UI/Carousel";
import logo from "../assets/test-logo.png";
import SingleTopCompany from "./SingleTopCompany";

const tempCompanies = [
    {
        id: 1,
        title: "Upwork",
        logo: logo,
        location: "New York",
        positions: 1,
    },
    {
        id: 2,
        title: "Invision",
        logo: logo,
        location: "Miami",
        positions: 3,
    },
    {
        id: 3,
        title: "Stripe",
        logo: logo,
        location: "Los Angeles",
        positions: 1,
    },
    {
        id: 4,
        title: "Figma",
        logo: logo,
        location: "New York",
        positions: 1,
    },
    {
        id: 5,
        title: "Employer",
        logo: logo,
        location: "New York",
        positions: 1,
    },
    {
        id: 6,
        title: "Udemy",
        logo: logo,
        location: "New York",
        positions: 1,
    },
];

const TopCompanies = () => {
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
                    <a href="/">Browse all companies</a>
                </div>
            </div>
            <div className="top-companies-carousel">
                <Carousel>
                    {tempCompanies.map((company) => (
                        <SingleTopCompany key={company.id} company={company} />
                    ))}
                </Carousel>
            </div>
        </Wrapper>
    );
};

export default TopCompanies;
