import { Fragment, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AuthModal from "../components/Auth/AuthModal";

const RootLayout = () => {
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
    const openAuthModal = () => {
        setIsAuthModalVisible(true);
    };
    const closeAuthModal = () => {
        setIsAuthModalVisible(false);
    };

    return (
        <Fragment>
            {isAuthModalVisible && <AuthModal onCloseModal={closeAuthModal} />}
            <Navigation showAuthModalHandler={openAuthModal} />
            <Outlet />
            <Footer />
            <ScrollRestoration
                getKey={(location, matches) => {
                    return location.key;
                }}
            />
        </Fragment>
    );
};

export default RootLayout;
