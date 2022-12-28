import Badge from "../UI/Badge";
import Card from "../UI/Card";
import Wrapper from "../UI/Wrapper";

const FeaturedJobs = () => {
    return (
        <Wrapper className={"landing-section pricing-plans"}>
            <h2 className="section-title">Pricing Packages</h2>
            <p className="section-subtitle">
                Please choose one of our pricing plans which fits you best
            </p>
            <div className="plans-list">
                <Card className="single-plan">
                    <div className="pricing-plan-header">
                        <h5>Basic</h5>
                    </div>
                    <span className="price">$199.00</span>
                    <ul>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>30 job posting</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>3 featured job</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Job displayed for 15 days</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Premium Support 24/7</span>
                        </li>
                    </ul>
                    <button className="btn btn-secondary">Add to cart</button>
                </Card>
                <Card className="single-plan recommended">
                    <div className="pricing-plan-header">
                        <h5>Standard</h5>
                        <Badge className={"green"}>Recommended</Badge>
                    </div>
                    <span className="price">$499.00</span>
                    <ul>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>40 job posting</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>5 featured job</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Job displayed for 30 days</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Premium Support 24/7</span>
                        </li>
                    </ul>
                    <button className="btn btn-secondary">Add to cart</button>
                </Card>
                <Card className="single-plan">
                    <div className="pricing-plan-header">
                        <h5>Extended</h5>
                    </div>
                    <span className="price">$799.00</span>
                    <ul>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>50 job posting</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>10 featured job</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Job displayed for 60 days</span>
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i>
                            <span>Premium Support 24/7</span>
                        </li>
                    </ul>
                    <button className="btn btn-secondary">Add to cart</button>
                </Card>
            </div>
        </Wrapper>
    );
};

export default FeaturedJobs;
