import { refreshUser } from "../../store/thunks/auth";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PrepareApp = ({ children }) => {
    const authDispatch = useDispatch();
    const userIsLoaded = useSelector((state) => state.auth.userIsLoaded);

    useEffect(() => {
        authDispatch(refreshUser());
    }, []);

    if (!userIsLoaded) {
        return <LoadingSpinner />;
    }
    return children;
};

export default PrepareApp;