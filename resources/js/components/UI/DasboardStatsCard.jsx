import DashboardCard from "./DashboardCard";

const DasboardStatsCard = ({ className, title, count, children }) => {
    return (
        <DashboardCard
            className={`dashboard-stats-card ${className ? className : ""}`}
        >
            <div className="icon">{children}</div>
            <div className="stats-info">
                <h4 className="count">{count}</h4>
                <h5 className="title">{title}</h5>
            </div>
        </DashboardCard>
    );
};

export default DasboardStatsCard;
