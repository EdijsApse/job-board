import { useState } from "react";
import Modal from "../UI/Modal";
import LoginModalBody from "./LoginModalBody";
import RegisterModalBody from "./RegisterModalBody";

const LOGIN_MODAL = 1;
const REGISTER_MODAL = 2;

const AuthModal = ({ onCloseModal }) => {
    const [visibleModal, setVisibleModal] = useState(LOGIN_MODAL);

    const showRegisterModal = () => {
        setVisibleModal(REGISTER_MODAL);
    }

    const showLoginModal = () => {
        setVisibleModal(LOGIN_MODAL);
    }

    return (
        <Modal onClose={onCloseModal}>
            <div className="auth-modal-body">
                {visibleModal === LOGIN_MODAL && <LoginModalBody onShowRegisterModal={showRegisterModal} />}
                {visibleModal === REGISTER_MODAL && <RegisterModalBody onShowLoginModal={showLoginModal} />}
            </div>
        </Modal>
    );
};

export default AuthModal;
