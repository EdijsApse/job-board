import { useSelector } from "react-redux";

const useUser = () => {
    const user = useSelector((state) => state.auth.user);

    return {
        user,
        company: user ? user.company : null,
        isEmployer: user && user.is_employer,
        isCandidate: user && user.is_candidate,
    };
};

export default useUser;
