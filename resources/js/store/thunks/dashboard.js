import axios from "../../axios";
import { alertActions } from "../slices/alert";
import { dashboardAction } from "../slices/dashboard";

export const loadCandidateDashboard = () => {
    return (dispatch) => {
        dispatch(dashboardAction.setIsLoading({ isLoading: true }));
        axios
            .get("/candidate-dashboard")
            .then((response) => {
                const { applications, pending_applications } = response.data;
                dispatch(
                    dashboardAction.setCandidateDashboard({
                        applications,
                        pending_applications,
                    })
                );
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Oooops, something went wrong...",
                    })
                );
            })
            .finally(() => {
                dispatch(dashboardAction.setIsLoading({ isLoading: false }));
            });
    };
};
