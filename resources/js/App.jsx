import { Fragment, useState } from "react";
import AuthModal from "./components/Auth/AuthModal";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";

const App = () => {
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
            <Landing />
            <Footer />
        </Fragment>
    );
};

export default App;
