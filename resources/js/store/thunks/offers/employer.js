import axios from "../../../axios";
import { alertActions } from "../../slices/alert";
import { employerOffersActions } from "../../slices/offers/employer";

export const loadEmployerOffers = () => {
    return (dispacth) => {
        dispacth(employerOffersActions.setIsLoading({ isLoading: true }));
        axios
            .get("employer/offers")
            .then((res) => {
                const { offers } = res.data;
                dispacth(employerOffersActions.setList({ offers }));
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
