const DashboardCard = ({ children, className }) => {
    const classes = `dashboard-card ${className ? className : ""}`;
    return <div className={classes}>{children}</div>;
};
export default DashboardCard;
