import { useSelector } from "react-redux";
import Fade from "../../../components/Animations/Fade";
import Filters from "../../../components/Offers/Filters";
import SingleOfferTableRow from "../../../components/Offers/SingleOfferTableRow";
import DashboardCard from "../../../components/UI/DashboardCard";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import Pagination from "../../../components/UI/Pagination";
import useFilter from "../../../hooks/use-filter";
import { loadEmployerOffers } from "../../../store/thunks/offers/employer";

const EmployerOffers = () => {
    const offers = useSelector((state) => state.employerOffers.list);
    const currentPage = useSelector(
        (state) => state.employerOffers.currentPage
    );
    const lastPage = useSelector((state) => state.employerOffers.lastPage);
    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(
            loadEmployerOffers,
            (state) => state.employerOffers.isLoading
        );

    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="offers-table-wrapper">
                <Filters
                    preselectedFilters={filters}
                    updateFilters={setFilters}
                    resetSearch={resetFilters}
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
