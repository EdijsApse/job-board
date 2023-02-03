import CSSTransition from "react-transition-group/CSSTransition";

const Fade = ({ children, isVisible }) => {
    return (
        <CSSTransition
            classNames="fade"
            timeout={300}
            in={isVisible}
            mountOnEnter
            unmountOnExit
        >
            {children}
        </CSSTransition>
    );
};

export default Fade;
