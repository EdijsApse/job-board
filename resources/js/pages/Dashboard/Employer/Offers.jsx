import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from "../../../components/Animations/Fade";
import SingleOfferTableRow from "../../../components/Offers/SingleOfferTableRow";
import DashboardCard from "../../../components/UI/DashboardCard";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import { loadEmployerOffers } from "../../../store/thunks/offers/employer";

const EmployerOffers = () => {
    const isLoading = useSelector((state) => state.employerOffers.isLoading);
    const offers = useSelector((state) => state.employerOffers.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadEmployerOffers());
    }, []);

    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="offers-table-wrapper">
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
            </div>
        </DashboardCard>
    );
};

export default EmployerOffers;
