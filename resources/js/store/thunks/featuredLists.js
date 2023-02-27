import axios from "../../axios";
import { getPathWithSearchParams } from "../../helpers";
import { alertActions } from "../slices/alert";
import { featuredJobsActions } from "../slices/featured/jobs";

export const getFeaturedJobs = (searchParams) => {
    return (dispatch) => {
        const url = getPathWithSearchParams("/featured/jobs", searchParams);
        dispatch(featuredJobsActions.setLoadingState({ isLoading: true }));
        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispatch(
                    featuredJobsActions.setItems({ items: data, meta: meta })
                );
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Could't load featured jobs list!",
                    })
                );
            })
            .finally(() => {
                dispatch(
                    featuredJobsActions.setLoadingState({ isLoading: false })
                );
            });
    };
};
