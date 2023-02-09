import { useState } from "react";
import ReactCarousel from "react-simply-carousel";

const carouselButtonProps = {
    style: {
        display: "none",
    },
};

const carouselContainerProps = {
    style: {
        width: "100%",
        justifyContent: "flex-start",
        userSelect: "none",
    },
    className: "custom-carousel-wrapper",
};

const carouselDotsNavProps = {
    show: true,
    itemBtnProps: {
        style: {
            height: 8,
            width: 8,
            marginTop: "32px",
            marginLeft: 5,
            marginRight: 5,
            borderRadius: "10px",
            border: 0,
            backgroundColor: "#ECEDF2",
            transition: "background-color 0.3s",
        },
    },
    activeItemBtnProps: {
        style: {
            marginTop: "32px",
            height: 8,
            width: 16,
            marginLeft: 5,
            marginRight: 5,
            border: 0,
            borderRadius: "10px",
            background: "#202124",
            transition: "background-color 0.3s",
        },
    },
};

const Carousel = ({ children }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    return (
        <ReactCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            containerProps={carouselContainerProps}
            itemsToShow={4}
            infinite={false}
            itemsToScroll={1}
            backwardBtnProps={carouselButtonProps}
            forwardBtnProps={carouselButtonProps}
            dotsNav={carouselDotsNavProps}
            speed={400}
            easing="linear"
        >
            {children}
        </ReactCarousel>
    );
};

export default Carousel;

