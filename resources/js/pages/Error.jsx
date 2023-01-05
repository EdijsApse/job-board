import { Fragment, useEffect, useState } from "react";
import { NavLink, useRouteError } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AuthModal from "../components/Auth/AuthModal";
import Wrapper from "../components/UI/Wrapper";

const NotFoundPage = () => {
    const error = useRouteError();
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
                    <h1>Oooops, Error occured</h1>
                    {error.status === 404 && (
                        <Fragment>
                            <h2 className="status-code">404</h2>
                            <h3>Page you are looking for, is not found!</h3>
                        </Fragment>
                    )}
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
