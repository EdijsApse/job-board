import axios from "../../../axios";
import { getPathWithSearchParams } from "../../../helpers";
import { alertActions } from "../../slices/alert";
import { employerOffersActions } from "../../slices/offers/employer";

export const loadEmployerOffers = (searchParams) => {
    return (dispacth) => {
        const url = getPathWithSearchParams("/employer/offers", searchParams);

        dispacth(employerOffersActions.setIsLoading({ isLoading: true }));
        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispacth(employerOffersActions.setList({ items: data, meta }));
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
                    employerOffersActions.setIsLoading({ isLoading: false })
                );
            });
    };
};
