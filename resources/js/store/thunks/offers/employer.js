import axios from "../../../axios";
import { alertActions } from "../../slices/alert";
import { employerOffersActions } from "../../slices/offers/employer";

export const loadEmployerOffers = (searchParams) => {
    return (dispacth) => {
        const params = new URLSearchParams();

        for (let key in searchParams) {
            if (searchParams[key]) {
                params.append(key, searchParams[key]);
            }
        }

        const queryString = params.toString();
        let url = queryString ? `/employer/offers?${queryString}` : "/employer/offers";
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
