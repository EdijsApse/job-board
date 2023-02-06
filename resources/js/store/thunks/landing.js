import { alertActions } from "../slices/alert";
import { landingActions } from "../slices/landing";
import axios from "../../axios";

export const loadLandingData = () => {
    return (dispatch) => {
        dispatch(landingActions.setIsLoading({ isLoading: true }));
        axios
            .get("/landing-data")
            .then((res) => {
                const { categories, job_openings_count } = res.data;
                dispatch(landingActions.setCategories({ categories }));
                dispatch(landingActions.setJobOpenings({ job_openings_count }));
                dispatch(landingActions.setIsLoaded({ isLoaded: true }));
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Ooops... Problems loading landing data...",
                    })
                );
            })
            .finally(() => {
                dispatch(landingActions.setIsLoading({ isLoading: false }));
            });
    };
};
