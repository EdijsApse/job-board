import Modal from "../UI/Modal";
import LoginModalBody from "./LoginModalBody";
import RegisterModalBody from "./RegisterModalBody";
import ForgotPasswordModal from "./ForgotPasswordModal";
import {
    LOGIN_MODAL,
    REGISTER_MODAL,
    FORGOT_PWD_MODAL,
    authActions,
} from "../../store/slices/auth";
import { useSelector, useDispatch } from "react-redux";

const AuthModal = () => {
    const visibleModal = useSelector((state) => state.auth.modal.modal_id);
    const authDispatch = useDispatch();
    const onCloseModal = () => {
        authDispatch(authActions.hideModal());
    };
    return (
        <Modal onClose={onCloseModal}>
            <div className="auth-modal-body">
                {visibleModal === LOGIN_MODAL && <LoginModalBody />}
                {visibleModal === REGISTER_MODAL && <RegisterModalBody />}
                {visibleModal === FORGOT_PWD_MODAL && <ForgotPasswordModal />}
            </div>
        </Modal>
    );
};

export default AuthModal;
