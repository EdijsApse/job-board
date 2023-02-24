import axios from "../../../axios";
import { getPathWithSearchParams } from "../../../helpers";
import { alertActions } from "../../slices/alert";
import { candidateOffersActions } from "../../slices/offers/candidate";

export const loadCandidateOffers = (searchParams) => {
    return (dispacth) => {
        const url = getPathWithSearchParams("/candidate/offers", searchParams);

        dispacth(candidateOffersActions.setIsLoading({ isLoading: true }));
        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispacth(candidateOffersActions.setList({ items: data, meta }));
            })
            .catch(() => {
                dispacth(
                    alertActions.showWarningAlert({
                        message: "Ooops... Couldn't load offers!",
                    })
                );
            })
            .finally(() => {
                dispacth(
                    candidateOffersActions.setIsLoading({ isLoading: false })
                );
            });
    };
};
