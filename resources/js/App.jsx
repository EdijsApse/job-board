import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { getLists } from "./store/thunks/select-options";
const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLists());
    }, [dispatch, getLists]);
    return <RouterProvider router={router} />;
};

export default App;
