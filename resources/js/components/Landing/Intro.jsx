import Wrapper from "../UI/Wrapper";
import bgImage from "../assets/intro-bg.jpg";

const bgStyles = {
    backgroundImage: `url(${bgImage})`,
};

const keywords = [
    "Designer",
    "Developer",
    "Web",
    "IOS",
    "PHP",
    "Senior Engineer",
];

const Intro = () => {
    const keywordsContent = keywords.map((keyword, index) => (
        <span className="keyword" key={index}>{keyword}{index !== keywords.length - 1 ? ',' : ''}</span>
    ));

    return (
        <div className="intro-wrapper" style={bgStyles}>
            <Wrapper>
                <div className="intro-content">
                    <h1>Join us & Explore Thousands of Jobs</h1>
                    <h3>Find Jobs, Employment & Career Opportunities</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Job title, keywords"
                            />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City or Country"
                            />
                            <i className="fa-solid fa-location-crosshairs"></i>
                        </div>
                        <button className="btn btn-primary">Find jobs</button>
                    </form>
                    <div className="suggested-searches">
                        <span className="title">Popular Searches :</span>
                        {keywordsContent}
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Intro;
