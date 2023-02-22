import axios from "../../../axios";
import { getPathWithSearchParams } from "../../../helpers";
import { alertActions } from "../../slices/alert";
import { employerApplicationsActions } from "../../slices/applications/employer";

export const loadEmployerApplications = (searchParams) => {
    return (dispacth) => {
        const url = getPathWithSearchParams("/employer/applications", searchParams);

        dispacth(employerApplicationsActions.setIsLoading({ isLoading: true }));
        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispacth(employerApplicationsActions.setList({ items: data, meta }));
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
                    employerApplicationsActions.setIsLoading({ isLoading: false })
                );
            });
    };
};
