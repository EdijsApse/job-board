import Card from "../UI/Card";

const SingleTopCompany = ({ company }) => {
    return (
        <Card className="single-top-company">
            <div className="company-logo">
                <img src={company.logo} alt={`${company.title} logo`} />
            </div>
            <h5>{company.title}</h5>
            <p>
                <i className="fa-solid fa-location-crosshairs"></i>
                <span>{company.location}</span>
            </p>
            <button className="btn btn-secondary">{`Open Jobs - ${company.positions}`}</button>
        </Card>
    );
};

export default SingleTopCompany;
