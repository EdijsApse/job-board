import { useEffect } from "react";
import { createPortal } from "react-dom";
const ConfirmationModal = ({ children, message, onCancel, onApprove }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return createPortal(
        <div
            className="modal d-block confirmation-modal"
            tabIndex="-1"
            role="dialog"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h1>Additional confirmation</h1>
                        <p className="confirmation-message">{message}</p>
                        <div className="actions">
                            <button
                                className="btn btn-secondary"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={onApprove}
                            >
                                Approve
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal-portal")
    );
};

export default ConfirmationModal;
