import placeholderImage from "../../components/assets/placeholder-image.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useCallback } from "react";
import axios from "../../axios";
import { useState } from "react";
import { alertActions } from "../../store/slices/alert";
import ViewPage from "../../components/UI/ViewPage";
import EducationList from "../../components/Candidate/EducationList";
import ExperienceList from "../../components/Candidate/ExperienceList";
import LanguageList from "../../components/Candidate/LanguageList";
import OverviewSidebarCard from "../../components/Candidate/OverviewSidebarCard";
import OfferButton from "../../components/Candidate/OfferButton";

const CandidateView = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isEmployer = useSelector((state) => {
        const user = state.auth.user;
        return user && user.is_employer;
    });

    const getCandidate = useCallback(() => {
        setIsLoading(true);
        axios
            .get(`/candidate/${id}`)
            .then((res) => {
                const { candidate } = res.data;
                setCandidate(candidate);
            })
            .catch((err) => {
                const responseStatus = err?.response?.status;
                if (responseStatus !== 404) {
                    dispatch(
                        alertActions.showWarningAlert({
                            message: "Oooops error occured!",
                        })
                    );
                }
                navigate("/404");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    useEffect(() => {
        getCandidate();
    }, [getCandidate]);

    if (isLoading) {
        return (
            <ViewPage className="single-candidate-page min-h-50 relative">
                <LoadingSpinner />
            </ViewPage>
        );
    }

    const {
        profile,
        basic_resume_details,
        salary,
        educations,
        experiences,
        languages,
    } = candidate;

    let detailsList = "";
    let basicDetails = "";
    let salaryDetails = "";
    let fullName = `${profile.name} ${profile.surname}`;
    const candidateImage = profile.image ?? placeholderImage;

    if (basic_resume_details) {
        basicDetails = (
            <div className="single-detail">
                <i className="fa-solid fa-briefcase"></i>
                <span>{basic_resume_details.category.name}</span>
            </div>
        );
    }

    if (salary) {
        salaryDetails = (
            <div className="single-detail">
                <i className="fa-solid fa-coins"></i>
                <span>{`${salary.min_salary} - ${salary.max_salary} $ / ${salary.type.name}`}</span>
            </div>
        );
    }

    if (basicDetails || salaryDetails) {
        detailsList = (
            <div className="details-list">
                {basicDetails}
                {salaryDetails}
            </div>
        );
    }

    return (
        <ViewPage className="single-candidate-page">
            <ViewPage.Header>
                <div className="left-col">
                    <div className="single-candidate-card">
                        <div className="candidate-info">
                            <div className="candidate-image">
                                <img src={candidateImage} alt={fullName} />
                            </div>
                            <div className="candidate-details">
                                <h1 className="view-page-title">{fullName}</h1>
                                {basic_resume_details && (
                                    <h4 className="candidate-jobtitle">
                                        {basic_resume_details.jobtitle}
                                    </h4>
                                )}
                                {detailsList}
                            </div>
                        </div>
                    </div>
                </div>
                {isEmployer && (
                    <div className="right-col">
                        <div className="actions">
                            <button className="btn btn-primary">
                                Send private message
                            </button>
                            <OfferButton candidateId={id} />
                        </div>
                    </div>
                )}
            </ViewPage.Header>
            <ViewPage.Main>
                <div className="row">
                    <div className="col-8">
                        <div className="inner-col-wrapper">
                            {basic_resume_details && (
                                <div className="single-info-section">
                                    <h3>About Candidate</h3>
                                    <p>{basic_resume_details.about}</p>
                                </div>
                            )}
                            {educations.length ? (
                                <div className="single-info-section">
                                    <h3>Educations</h3>
                                    <EducationList educations={educations} />
                                </div>
                            ) : (
                                ""
                            )}
                            {experiences.length ? (
                                <div className="single-info-section">
                                    <h3>Experiences</h3>
                                    <ExperienceList experiences={experiences} />
                                </div>
                            ) : (
                                ""
                            )}
                            {languages.length ? (
                                <div className="single-info-section">
                                    <h3>Languages</h3>
                                    <LanguageList languages={languages} />
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="col-4">
                        {(basic_resume_details || salary || profile) && (
                            <OverviewSidebarCard
                                resumeDetails={basic_resume_details}
                                salary={salary}
                                profile={profile}
                            />
                        )}
                    </div>
                </div>
            </ViewPage.Main>
        </ViewPage>
    );
};

export default CandidateView;
