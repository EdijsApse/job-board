import Wrapper from "../UI/Wrapper";
import bgImage from "../assets/intro-bg.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    
    const keywordsContent = keywords.map((keyword, index) => (
        <span className="keyword" key={index} onClick={() => {
            navigate(`/jobs?keyword=${keyword}`)
        }}>
            {keyword}
            {index !== keywords.length - 1 ? "," : ""}
        </span>
    ));

    const cities = useSelector((state) => state.selectOptions.cities);
    const [keyword, setKeyword] = useState("");
    const [city, setCity] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let queryString = "";
        if (keyword) {
            queryString = `keyword=${keyword}`;
        }

        if (city) {
            queryString = queryString
                ? `${queryString}&city_id=${city}`
                : `city_id=${city}`;
        }
        navigate(`jobs?${queryString}`);
    };

    const keywordChanged = (e) => {
        setKeyword(e.target.value);
    };

    const cityChanged = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="intro-wrapper" style={bgStyles}>
            <Wrapper>
                <div className="intro-content">
                    <h1>Join us & Explore Thousands of Jobs</h1>
                    <h3>Find Jobs, Employment & Career Opportunities</h3>
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Job title, keywords"
                                value={keyword}
                                onChange={keywordChanged}
                            />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="form-group">
                            <select
                                className="form-control"
                                onChange={cityChanged}
                                value={city}
                            >
                                <option value="">Select city</option>
                                {cities.map((singleCity) => (
                                    <option
                                        value={singleCity.value}
                                        key={singleCity.value}
                                    >
                                        {singleCity.label}
                                    </option>
                                ))}
                            </select>
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
