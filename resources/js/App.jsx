import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { refreshUser } from "./store/thunks/auth";
import router from "./router";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const App = () => {
    const authDispatch = useDispatch();

    const refreshingUser = useSelector((state) => state.auth.refreshingUser);

    useEffect(() => {
        authDispatch(refreshUser());
    }, []);

    if (refreshingUser) {
        return <LoadingSpinner />;
    }

    return <RouterProvider router={router} />;
};

export default App;
