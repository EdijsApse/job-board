import { useEffect, useState } from "react";

const TYPE_CANDIDATE = 1;
const TYPE_EMPLOYER = 2;

const UserTypeSelect = ({ onTypeSelected }) => {
    const [selectedType, setSelectedType] = useState();
    const selectCandidateTypeHandler = () => {
        setSelectedType(TYPE_CANDIDATE);
    };
    const selectEmployerTypeHandler = () => {
        setSelectedType(TYPE_EMPLOYER);
    };

    useEffect(() => {
        onTypeSelected(selectedType);
    }, [onTypeSelected]);

    return (
        <div className="account-types">
            <button
                className={`btn btn-acc-type ${
                    selectedType === TYPE_CANDIDATE ? "selected" : ""
                }`}
                onClick={selectCandidateTypeHandler}
            >
                <i className="fa-solid fa-user"></i>
                <span>Candidate</span>
            </button>
            <button
                className={`btn btn-acc-type ${
                    selectedType === TYPE_EMPLOYER ? "selected" : ""
                }`}
                onClick={selectEmployerTypeHandler}
            >
                <i className="fa-solid fa-briefcase"></i>
                <span>Employer</span>
            </button>
        </div>
    );
};
export default UserTypeSelect;
