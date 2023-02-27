import axios from "../../axios";
import { getPathWithSearchParams } from "../../helpers";
import { alertActions } from "../slices/alert";
import { employerJobsActions } from "../slices/employerJobs";

export const loadEmployerJobs = (searchParams) => {
    return (dispacth) => {
        const url = getPathWithSearchParams("/employer/jobs", searchParams);

        dispacth(employerJobsActions.setIsLoading({ isLoading: true }));
        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                if (data.length) {
                    dispacth(
                        employerJobsActions.setList({ items: data, meta })
                    );
                }
            })
            .catch(() => {
                dispacth(
                    alertActions.showWarningAlert({
                        message: "Ooops... Couldn't load vacancies!",
                    })
                );
            })
            .finally(() => {
                dispacth(
                    employerJobsActions.setIsLoading({ isLoading: false })
                );
            });
    };
};
