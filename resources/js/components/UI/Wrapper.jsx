const Wrapper = ({ children, className }) => {
    return <section className={`section-wrapper ${className || ''}`}>{children}</section>;
};

export default Wrapper;
