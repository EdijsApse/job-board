import { createPortal } from "react-dom";
const Modal = ({ onClose, children }) => {
    const preventClose = (e) => {
        e.stopPropagation();
    };
    return createPortal(
        <div
            className="modal d-block"
            tabIndex="-1"
            role="dialog"
            onClick={onClose}
        >
            <div
                className="modal-dialog modal-dialog-centered"
                role="document"
                onClick={preventClose}
            >
                <div className="modal-content">
                    <div className="modal-body">
                        <button
                            className="modal-close-button"
                            onClick={onClose}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-portal")
    );
};

export default Modal;
