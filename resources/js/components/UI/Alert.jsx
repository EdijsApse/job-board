import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../../store/slices/alert";
import SlideDown from "../Animations/SlideDown";

const Alert = () => {
    const alertMessage = useSelector((state) => state.alert.message);
    const isSuccessAlert = useSelector((state) => state.alert.success);
    const dispatch = useDispatch();

    const onCloseAlertHandler = useCallback(() => {
        dispatch(alertActions.hideAlert());
    }, [dispatch, alertActions]);

    useEffect(() => {
        let closeTimeout = null;
        if (alertMessage) {
            closeTimeout = setTimeout(() => {
                onCloseAlertHandler();
            }, 3000);
        }
        return () => {
            clearTimeout(closeTimeout);
        };
    }, [alertMessage, onCloseAlertHandler]);

    return (
        <SlideDown isVisible={!!alertMessage}>
            <div
                className={`alert-popup ${
                    isSuccessAlert ? "success-popup" : "error-popup"
                }`}
            >
                <h6>
                    {isSuccessAlert ? "Success message" : "Warning message"}
                </h6>
                <p>{alertMessage}</p>
                <i
                    className="fa-regular fa-circle-xmark close-alert"
                    onClick={onCloseAlertHandler}
                ></i>
            </div>
        </SlideDown>
    );
};

export default Alert;
