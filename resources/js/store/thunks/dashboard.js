import axios from "../../axios";
import { alertActions } from "../slices/alert";
import { dashboardAction } from "../slices/dashboard";

export const loadCandidateDashboard = () => {
    return (dispatch) => {
        dispatch(dashboardAction.setIsLoading({ isLoading: true }));
        axios
            .get("/candidate-dashboard")
            .then((response) => {
                dispatch(dashboardAction.setCandidateDashboard(response.data));
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

export const loadEmployerDashboard = () => {
    return (dispatch) => {
        dispatch(dashboardAction.setIsLoading({ isLoading: true }));
        axios
            .get("/employer-dashboard")
            .then((response) => {
                dispatch(dashboardAction.setEmployerDashboard(response.data));
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
