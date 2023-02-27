import axios from "../axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useUser from "./use-user";
import { alertActions } from "../store/slices/alert";

const useAddToFeatured = (endPoint, requestData) => {
    const { user } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    const isFeaturedButtonVisible = user ? true : false;
    const dispatch = useDispatch();
    const addToFeaturedList = () => {
        setIsLoading(true);
        axios
            .post(endPoint, requestData)
            .then((res) => {
                const { message, success } = res.data;
                if (success) {
                    dispatch(alertActions.showSuccessAlert({ message }));
                }
            })
            .catch(() => {
                dispatch(
                    alertActions.showWarningAlert({
                        message: "Failed to store item to featured list!",
                    })
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {
        isLoading,
        isFeaturedButtonVisible,
        addToFeaturedList,
    };
};

export default useAddToFeatured;
