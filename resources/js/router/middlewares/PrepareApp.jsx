import { redirectOnSuccessCallback, refreshUser } from "../../store/thunks/auth";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrepareApp = ({ children }) => {
    const authDispatch = useDispatch();
    const navigate = useNavigate();
    const userIsLoaded = useSelector((state) => state.auth.userIsLoaded);

    useEffect(() => {
        authDispatch(refreshUser(redirectOnSuccessCallback.bind(null, navigate)));
    }, []);

    if (!userIsLoaded) {
        return <LoadingSpinner />;
    }
    return children;
};

export default PrepareApp;