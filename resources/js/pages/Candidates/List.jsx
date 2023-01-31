import Wrapper from "../../components/UI/Wrapper";
import CandidateItem from "../../components/Candidate/ListItem";
import Filters from "../../components/Candidate/Filters";
import Pagination from "../../components/UI/Pagination";
import BreadCrumbs from "../../components/UI/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getFiltersFromUrlSearchParams } from "../../helpers";
import { useCallback } from "react";
import { getCandidates } from "../../store/thunks/candidate";

const CandidatesList = () => {
    const isLoading = useSelector((state) => state.candidates.isLoading);

    const list = useSelector((state) => state.candidates.list);
    const currentPage = useSelector((state) => state.candidates.currentPage);
    const lastPage = useSelector((state) => state.candidates.lastPage);
    const itemsPerPage = useSelector((state) => state.candidates.itemsPerPage);
    const totalItems = useSelector((state) => state.candidates.totalItems);

    const dispatch = useDispatch();

    const [searchParams, setSeachParams] = useSearchParams();

    const filters = useMemo(() => {
        return getFiltersFromUrlSearchParams(searchParams);
    }, [searchParams]);

    useEffect(() => {
        if (!isLoading) {
            dispatch(getCandidates(filters));
        }
    }, [filters]);

    const setPageHandler = (page) => {
        setSeachParams({ ...filters, page: page });
    };

    const setFilters = useCallback(
        (newFilters) => {
            const paramsList = { ...filters, ...newFilters, page: 1 };
            const validParams = {};
            for (let key in paramsList) {
                if (paramsList[key]) {
                    validParams[key] = paramsList[key];
                }
            }

            setSeachParams(validParams);
        },
        [setSeachParams]
    );

    const resetSearchHandler = () => {
        setSeachParams({ page: 1 });
    };

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
                                    resetSearch={resetSearchHandler}
                                />
                            </div>
                        </div>
                        <div className="col-8 relative">
                            {isLoading && <LoadingSpinner />}
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
