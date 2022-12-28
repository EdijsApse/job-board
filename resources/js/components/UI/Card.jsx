const Card = ({ children, className, listTag }) => {
    const classList = `custom-card ${className || ""}`;

    if (listTag) {
        return <li className={classList}>{children}</li>;
    }

    return <div className={classList}>{children}</div>;
};

export default Card;
