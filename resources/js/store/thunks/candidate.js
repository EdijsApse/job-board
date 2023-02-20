import axios from "../../axios";
import { getPathWithSearchParams } from "../../helpers";
import { alertActions } from "../slices/alert";
import { candidateActions } from "../slices/candidate";

export const getCandidates = (searchParams) => {
    return (dispatch) => {
        const url = getPathWithSearchParams("/candidate", searchParams);

        dispatch(candidateActions.setIsLoading({ isLoading: true }));

        axios
            .get(url)
            .then((res) => {
                const { data, meta } = res.data;
                dispatch(
                    candidateActions.setListDetails({
                        items: data,
                        meta: meta,
                    })
                );
            })
            .catch((err) => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Could't load list of candidates!",
                    })
                );
            })
            .finally(() => {
                dispatch(candidateActions.setIsLoading({ isLoading: false }));
            });
    };
};
