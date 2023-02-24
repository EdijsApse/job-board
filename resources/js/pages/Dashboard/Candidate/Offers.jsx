import { useSelector } from "react-redux";
import Fade from "../../../components/Animations/Fade";
import Filters from "../../../components/Offers/Filters";
import SingleOfferTableRow from "../../../components/Offers/SingleOfferTableRow";
import DashboardCard from "../../../components/UI/DashboardCard";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import Pagination from "../../../components/UI/Pagination";
import useFilter from "../../../hooks/use-filter";
import { loadCandidateOffers } from "../../../store/thunks/offers/candidate";

const CandidateOffers = () => {
    const offers = useSelector((state) => state.candidateOffers.list);
    const currentPage = useSelector(
        (state) => state.candidateOffers.currentPage
    );
    const lastPage = useSelector((state) => state.candidateOffers.lastPage);
    const { filters, isLoading, setFilters, resetFilters, setPageHandler } =
        useFilter(
            loadCandidateOffers,
            (state) => state.candidateOffers.isLoading
        );

    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="table-wrapper">
                <Filters
                    preselectedFilters={filters}
                    updateFilters={setFilters}
                    resetSearch={resetFilters}
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Offer Received</th>
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
                {offers.length === 0 && !isLoading && (
                    <h6 className="no-list-items-title">No Offers found!</h6>
                )}
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

export default CandidateOffers;
