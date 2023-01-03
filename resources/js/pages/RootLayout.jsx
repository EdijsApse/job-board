import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AuthModal from "../components/Auth/AuthModal";
import { useSelector } from "react-redux";

const RootLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const isAuthModalVisible = useSelector(
        (state) => state.auth.modal.isVisible
    );

    return (
        <Fragment>
            {!isAuthenticated && isAuthModalVisible && <AuthModal />}
            <Navigation />
            <Outlet />
            <Footer />
            <ScrollRestoration
                getKey={(location) => {
                    return location.key;
                }}
            />
        </Fragment>
    );
};

export default RootLayout;
