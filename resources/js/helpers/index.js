export const axiosErrorResponseHandler = (
    errResponse,
    setFormErrorsCallBack,
    setAlertCallback
) => {
    const { errors, message } = errResponse.response.data;
    const formErrors = {};
    if (errors) {
        for (const input in errors) {
            formErrors[input] = errors[input][0];
        }
        setFormErrorsCallBack(formErrors);
    } else {
        setAlertCallback(
            message ?? "Oooops.... Something went wrong! Try again later!"
        );
    }
};

/**
 * Gets object from URLSearchParams string
 * 
 * @param { URLSearchParams } URLSearchParams 
 * @returns Object created fom url search params
 */
export const getFiltersFromUrlSearchParams = (URLSearchParams) => {
    const searchParamsEntries = URLSearchParams.entries();
    const filters = {};

    for (let param of searchParamsEntries) {
        const [key, value] = param;
        if (value) {
            filters[key] = value;
        }
    }
    return filters;
};

/**
 * Creates API endpoint with query string from given object
 * 
 * @param {*} path API Endpoint
 * @param {*} params Object with key value pairs presenting filters
 * @returns 
 */
export const getPathWithSearchParams = (path, params) => {
    const urlSearchParams = new URLSearchParams();

    for (let key in params) {
        if (params[key]) {
            urlSearchParams.append(key, params[key]);
        }
    }

    const queryString = urlSearchParams.toString();

    return queryString ? `${path}?${queryString}` : path;
};
