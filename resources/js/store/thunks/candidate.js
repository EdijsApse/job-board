import axios from "../../axios";
import { alertActions } from "../slices/alert";
import { candidateActions } from "../slices/candidate";

export const getCandidates = (searchParams) => {
    return (dispatch) => {
        const params = new URLSearchParams();

        for (let key in searchParams) {
            if (searchParams[key]) {
                params.append(key, searchParams[key]);
            }
        }

        const queryString = params.toString();
        let url = queryString ? `/candidate?${queryString}` : "/candidate";

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
                dispatch(
                    candidateActions.setIsLoading({ isLoading: false })
                );
            });
    };
};
