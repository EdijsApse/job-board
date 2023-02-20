import Wrapper from "../../components/UI/Wrapper";
import Item from "../../compone../../components/Job/Item";
import Filters from "../../components/Job/Filters";
import Pagination from "../../components/UI/Pagination";
import SortInputs from "../../components/Job/SortInputs";
import BreadCrumbs from "../../components/UI/Breadcrumbs";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { getJobs } from "../../store/thunks/job";
import Fade from "../../components/Animations/Fade";
import useFilter from "../../hooks/use-filter";

const JobList = () => {
    const list = useSelector((state) => state.job.list);
    const currentPage = useSelector((state) => state.job.currentPage);
    const lastPage = useSelector((state) => state.job.lastPage);
    const itemsPerPage = useSelector((state) => state.job.itemsPerPage);
    const totalItems = useSelector((state) => state.job.totalItems);

    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(getJobs, (state) => state.job.isLoading);

    const crumbs = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Jobs",
            link: "/jobs",
        },
    ];

    return (
        <div className="page list-page">
            <div className="page-header">
                <h1>Jobs</h1>
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
                                {/* <div className="sort-inputs">
                                    <SortInputs />
                                </div> */}
                            </div>
                            {list.length === 0 && !isLoading && (
                                <h6 className="no-list-items-title">
                                    No Jobs found!
                                </h6>
                            )}
                            <ul className="list-items">
                                {list.map((job) => (
                                    <Item
                                        key={job.id}
                                        job={job}
                                        showSalary={true}
                                        showFeaturedBadge={true}
                                        squareImage={true}
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

export default JobList;
