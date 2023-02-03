import CSSTransition from "react-transition-group/CSSTransition";

const SlideDown = ({ children, isVisible }) => {
    return (
        <CSSTransition
            classNames="slide-down"
            timeout={300}
            in={isVisible}
            mountOnEnter
            unmountOnExit
        >
            {children}
        </CSSTransition>
    );
};

export default SlideDown;
