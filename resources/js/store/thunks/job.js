import axios from "../../axios";
import { getPathWithSearchParams } from "../../helpers";
import { alertActions } from "../slices/alert";
import { jobActions } from "../slices/job";

export const getJobs = (searchParams) => {
    return (dispatch) => {
        const url = getPathWithSearchParams("/job", searchParams);

        dispatch(jobActions.setLoadingState({ isLoading: true }));

        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispatch(jobActions.setItems({ items: data, meta: meta }));
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Could't load jobs list!",
                    })
                );
            })
            .finally(() => {
                dispatch(jobActions.setLoadingState({ isLoading: false }));
            });
    };
};
