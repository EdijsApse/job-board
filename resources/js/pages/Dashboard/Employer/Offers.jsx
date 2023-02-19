import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Fade from "../../../components/Animations/Fade";
import Filters from "../../../components/Offers/Filters";
import SingleOfferTableRow from "../../../components/Offers/SingleOfferTableRow";
import DashboardCard from "../../../components/UI/DashboardCard";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import Pagination from "../../../components/UI/Pagination";
import { getFiltersFromUrlSearchParams } from "../../../helpers";
import { loadEmployerOffers } from "../../../store/thunks/offers/employer";

const EmployerOffers = () => {
    const isLoading = useSelector((state) => state.employerOffers.isLoading);
    const offers = useSelector((state) => state.employerOffers.list);
    const currentPage = useSelector(
        (state) => state.employerOffers.currentPage
    );
    const lastPage = useSelector((state) => state.employerOffers.lastPage);
    const dispatch = useDispatch();
    const [searchParams, setSeachParams] = useSearchParams();
    const filters = useMemo(() => {
        return getFiltersFromUrlSearchParams(searchParams);
    }, [searchParams]);

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

    const setPageHandler = (page) => {
        setSeachParams({ ...filters, page: page });
    };

    useEffect(() => {
        if (!isLoading) {
            dispatch(loadEmployerOffers(filters));
        }
    }, [filters]);

    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="offers-table-wrapper">
                <Filters
                    preselectedFilters={filters}
                    updateFilters={setFilters}
                    resetSearch={resetSearchHandler}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Date Applied</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer) => (
                            <SingleOfferTableRow key={offer.id} offer={offer} />
                        ))}
                    </tbody>
                </table>
                {offers.length > 0 && (
                    <Pagination
                        currentPage={currentPage}
                        lastPage={lastPage}
                        setPage={setPageHandler}
                    />
                )}
            </div>
        </DashboardCard>
    );
};

export default EmployerOffers;
