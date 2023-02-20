import Wrapper from "../../components/UI/Wrapper";
import CandidateItem from "../../components/Candidate/ListItem";
import Filters from "../../components/Candidate/Filters";
import Pagination from "../../components/UI/Pagination";
import BreadCrumbs from "../../components/UI/Breadcrumbs";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { getCandidates } from "../../store/thunks/candidate";
import Fade from "../../components/Animations/Fade";
import useFilter from "../../hooks/use-filter";

const CandidatesList = () => {
    const list = useSelector((state) => state.candidates.list);
    const currentPage = useSelector((state) => state.candidates.currentPage);
    const lastPage = useSelector((state) => state.candidates.lastPage);
    const itemsPerPage = useSelector((state) => state.candidates.itemsPerPage);
    const totalItems = useSelector((state) => state.candidates.totalItems);

    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(getCandidates, (state) => state.candidates.isLoading);

    const crumbs = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Candidates",
            link: "/candidates",
        },
    ];

    return (
        <div className="page list-page">
            <div className="page-header">
                <h1>Candidates</h1>
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
                            <ul className="list-items">
                                {list.map((candidate) => (
                                    <CandidateItem
                                        candidate={candidate}
                                        key={candidate.id}
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

export default CandidatesList;
