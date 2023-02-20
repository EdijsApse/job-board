import Wrapper from "../../components/UI/Wrapper";
import Filters from "../../components/Employer/Filters";
import Pagination from "../../components/UI/Pagination";
import BreadCrumbs from "../../components/UI/Breadcrumbs";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { getEmployers } from "../../store/thunks/employer";
import EmployerListItem from "../../components/Employer/ListItem";
import Fade from "../../components/Animations/Fade";
import useFilter from "../../hooks/use-filter";

const EmployerList = () => {
    const list = useSelector((state) => state.employer.list);
    const currentPage = useSelector((state) => state.employer.currentPage);
    const lastPage = useSelector((state) => state.employer.lastPage);
    const itemsPerPage = useSelector((state) => state.employer.itemsPerPage);
    const totalItems = useSelector((state) => state.employer.totalItems);

    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(getEmployers, (state) => state.employer.isLoading);

    const crumbs = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Employers",
            link: "/employers",
        },
    ];

    return (
        <div className="page list-page">
            <div className="page-header">
                <h1>Employers</h1>
                <BreadCrumbs crumbs={crumbs} />
            </div>
            <main className="page-main container-fluid">
                <Wrapper>
                    <div className="row">
                        <div className="col-4">
                            <div className="page-filters">
                                <Filters
                                    preselectedFilters={filters}
                                    updateFilters={setFilters}
                                    resetSearch={resetFilters}
                                />
                            </div>
                        </div>
                        <div className="col-8 relative">
                            <Fade isVisible={isLoading}>
                                <LoadingSpinner />
                            </Fade>
                            <div className="sort-container">
                                <div className="search-result-details">
                                    <span>
                                        Items per page: <b>{itemsPerPage}</b>
                                    </span>
                                    <span>
                                        Items found: <b>{totalItems}</b>
                                    </span>
                                </div>
                            </div>
                            {list.length === 0 && !isLoading && (
                                <h6 className="no-list-items-title">
                                    No Jobs found!
                                </h6>
                            )}
                            <ul className="list-items employers-list">
                                {list.map((employer) => (
                                    <EmployerListItem
                                        employer={employer}
                                        key={employer.id}
                                    />
                                ))}
                            </ul>
                            {list.length > 0 && (
                                <Pagination
                                    currentPage={currentPage}
                                    lastPage={lastPage}
                                    setPage={setPageHandler}
                                />
                            )}
                        </div>
                    </div>
                </Wrapper>
            </main>
        </div>
    );
};

export default EmployerList;
