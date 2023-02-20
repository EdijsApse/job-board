import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getFiltersFromUrlSearchParams } from "../helpers";

const useFilter = (filterItemsCallback, getIsLoadingStateCallback) => {
    const [searchParams, setSeachParams] = useSearchParams();
    const isLoading = useSelector(getIsLoadingStateCallback);

    const filters = useMemo(() => {
        return getFiltersFromUrlSearchParams(searchParams);
    }, [searchParams]);

    const setFilters = useCallback(
        (newFilters) => {
            const paramsList = { ...filters, ...newFilters, page: 1 };
            const validParams = {};
            for (let key in paramsList) {
                if (paramsList[key]) {
                    validParams[key] = paramsList[key];
                }
            }

            setSeachParams(validParams);
        },
        [setSeachParams]
    );

    const resetFilters = () => {
        setSeachParams({});
    };

    const setPageHandler = (page) => {
        setSeachParams({ ...filters, page: page });
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading) {
            dispatch(filterItemsCallback(filters));
        }
    }, [filters]);

    return {
        filters,
        isLoading,
        setFilters,
        resetFilters,
        setPageHandler,
    };
};

export default useFilter;
