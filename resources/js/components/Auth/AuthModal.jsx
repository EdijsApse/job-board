import { useState } from "react";
import Modal from "../UI/Modal";
import LoginModalBody from "./LoginModalBody";
import RegisterModalBody from "./RegisterModalBody";
import ForgotPasswordModal from "./ForgotPasswordModal";

const LOGIN_MODAL = 1;
const REGISTER_MODAL = 2;
const FORGOT_PWD_MODAL = 3;

const AuthModal = ({ onCloseModal }) => {
    const [visibleModal, setVisibleModal] = useState(LOGIN_MODAL);

    const showRegisterModal = () => {
        setVisibleModal(REGISTER_MODAL);
    }

    const showLoginModal = () => {
        setVisibleModal(LOGIN_MODAL);
    }

    const showForgotPasswordModal = () => {
        setVisibleModal(FORGOT_PWD_MODAL);
    }

    return (
        <Modal onClose={onCloseModal}>
            <div className="auth-modal-body">
                {visibleModal === LOGIN_MODAL && <LoginModalBody onShowRegisterModal={showRegisterModal} onShowForgotPasswordModal={showForgotPasswordModal} />}
                {visibleModal === REGISTER_MODAL && <RegisterModalBody onShowLoginModal={showLoginModal} />}
                {visibleModal === FORGOT_PWD_MODAL && <ForgotPasswordModal onShowLoginModal={showLoginModal} />}
            </div>
        </Modal>
    );
};

export default AuthModal;
