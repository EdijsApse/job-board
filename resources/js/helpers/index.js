export const axiosErrorResponseHandler = (errResponse, setFormErrorsCallBack, setAlertCallback) => {
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
