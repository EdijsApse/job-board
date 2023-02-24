import axios from "../../../axios";
import { getPathWithSearchParams } from "../../../helpers";
import { alertActions } from "../../slices/alert";
import { candidateApplicationsActions } from "../../slices/applications/candidate";

export const loadCandidateApplications = (searchParams) => {
    return (dispacth) => {
        const url = getPathWithSearchParams(
            "/candidate/applications",
            searchParams
        );

        dispacth(
            candidateApplicationsActions.setIsLoading({ isLoading: true })
        );
        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispacth(
                    candidateApplicationsActions.setList({ items: data, meta })
                );
            })
            .catch(() => {
                dispacth(
                    alertActions.showWarningAlert({
                        message: "Ooops... Couldn't load applications!",
                    })
                );
            })
            .finally(() => {
                dispacth(
                    candidateApplicationsActions.setIsLoading({
                        isLoading: false,
                    })
                );
            });
    };
};
