import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AuthModal from "../components/Auth/AuthModal";
import BaseLayout from "./BaseLayout";

const RootLayout = () => {
    return (
        <BaseLayout>
            <AuthModal />
            <Outlet />
            <Footer />
        </BaseLayout>
    );
};

export default RootLayout;
