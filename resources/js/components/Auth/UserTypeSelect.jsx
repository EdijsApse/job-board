const TYPE_CANDIDATE = 1;
const TYPE_EMPLOYER = 2;

const UserTypeSelect = ({ selectType, selectedType }) => {
    const selectCandidateTypeHandler = () => {
        selectType(TYPE_CANDIDATE);
    };
    const selectEmployerTypeHandler = () => {
        selectType(TYPE_EMPLOYER);
    };

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
