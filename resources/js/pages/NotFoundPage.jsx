import { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AuthModal from "../components/Auth/AuthModal";
import Wrapper from "../components/UI/Wrapper";

const NotFoundPage = () => {
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
    const openAuthModal = () => {
        setIsAuthModalVisible(true);
    };
    const closeAuthModal = () => {
        setIsAuthModalVisible(false);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    return (
        <Fragment>
            {isAuthModalVisible && <AuthModal onCloseModal={closeAuthModal} />}
            <Navigation showAuthModalHandler={openAuthModal} />
            <main className="page error-page">
                <Wrapper className="error-main">
                    <h1>404 Error</h1>
                    <h2 className="status-code">
                        Resource you were looking for, was not found!
                    </h2>
                    <NavLink to="/" className="btn btn-primary">
                        Back to Home
                    </NavLink>
                </Wrapper>
            </main>
            <Footer />
        </Fragment>
    );
};

export default NotFoundPage;
