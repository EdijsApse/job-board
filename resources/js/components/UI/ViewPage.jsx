import Wrapper from "./Wrapper";

const ViewPage = ({ children, className }) => {
    return <div className={`view-page ${className ?? ""}`}>{children}</div>;
};

ViewPage.Header = ({ children }) => {
    return (
        <div className="container-fluid bg-pale-gray">
            <div className="view-page-header">
                <Wrapper className="view-page-header-wrapper">
                    {children}
                </Wrapper>
            </div>
        </div>
    );
};

ViewPage.Main = ({ children }) => {
    return (
        <div className="container-fluid bg-white">
            <main className="view-page-main">
                <Wrapper>{children}</Wrapper>
            </main>
        </div>
    );
};

export default ViewPage;
