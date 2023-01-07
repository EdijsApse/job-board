import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AuthModal from "../components/Auth/AuthModal";
import { useSelector } from "react-redux";
import BaseLayout from "./BaseLayout";

const RootLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const isAuthModalVisible = useSelector(
        (state) => state.auth.modal.isVisible
    );

    return (
        <BaseLayout>
            {!isAuthenticated && isAuthModalVisible && <AuthModal />}
            <Outlet />
            <Footer />
        </BaseLayout>
    );
};

export default RootLayout;
