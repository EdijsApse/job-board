export const axiosErrorResponseHandler = (
    errResponse,
    setFormErrorsCallBack,
    setAlertCallback
) => {
    const { errors } = errResponse.response.data;
    const formErrors = {};

    if (errors) {
        for (const input in errors) {
            formErrors[input] = errors[input][0];
        }
        setFormErrorsCallBack(formErrors);
    } else {
        setAlertCallback("Oooops.... Something went wrong! Try again later!");
    }
};

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
