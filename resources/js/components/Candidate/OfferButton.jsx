import { Fragment, useState } from "react";
import Fade from "../Animations/Fade";
import OfferModal from "./OfferModal";

const OfferButton = ({ candidateId }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setShowModal(true);
                }}
            >
                Offer Job
            </button>
            <Fade isVisible={showModal}>
                <OfferModal
                    candidateId={candidateId}
                    onCloseHandler={() => {
                        setShowModal(false);
                    }}
                />
            </Fade>
        </Fragment>
    );
};

export default OfferButton;
