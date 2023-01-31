import Wrapper from "../../components/UI/Wrapper";
import Filters from "../../components/Employer/Filters";
import Pagination from "../../components/UI/Pagination";
import BreadCrumbs from "../../components/UI/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getFiltersFromUrlSearchParams } from "../../helpers";
import { useCallback } from "react";
import { getEmployers } from "../../store/thunks/employer";
import EmployerListItem from "../../components/Employer/ListItem";

const EmployerList = () => {
    const isLoading = useSelector((state) => state.employer.isLoading);

    const list = useSelector((state) => state.employer.list);
    const currentPage = useSelector((state) => state.employer.currentPage);
    const lastPage = useSelector((state) => state.employer.lastPage);
    const itemsPerPage = useSelector((state) => state.employer.itemsPerPage);
    const totalItems = useSelector((state) => state.employer.totalItems);

    const dispatch = useDispatch();

    const [searchParams, setSeachParams] = useSearchParams();

    const filters = useMemo(() => {
        return getFiltersFromUrlSearchParams(searchParams);
    }, [searchParams]);

    useEffect(() => {
        if (!isLoading) {
            dispatch(getEmployers(filters));
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

    const crumbs = [{
        title: 'Home',
        link: '/'
    }, {
        title: 'Employers',
        link: '/employers'
    }];

    return (
        <div className="page">
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
                            <ul className="employers-list">
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
