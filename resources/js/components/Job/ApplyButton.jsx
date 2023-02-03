import { useState } from "react";
import { Fragment } from "react";
import Fade from "../Animations/Fade";
import ApplyModal from "./ApplyModal";

const ApplyButton = ({ job }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
            >
                Apply Now
            </button>
            <Fade isVisible={showModal}>
                <ApplyModal
                    job={job}
                    onCloseHandler={() => {
                        setShowModal(false);
                    }}
                />
            </Fade>
        </Fragment>
    );
};

export default ApplyButton;
