const DashboardPage = ({ children, pageTitle }) => {
    return (
        <div className="dashboard-page">
            <h1 className="page-title">{pageTitle}</h1>
            {children}
        </div>
    );
};

export default DashboardPage;
