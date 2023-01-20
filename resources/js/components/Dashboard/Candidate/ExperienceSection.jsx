import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "../../../store/slices/resume";
import { deleteExperience, getExperiences } from "../../../store/thunks/resume";
import DashboardCard from "../../UI/DashboardCard";
import LoadingSpinner from "../../UI/LoadingSpinner";
import ExperienceListItem from "./ExperienceListItem";

const ExperienceForm = () => {
    const isLoading = useSelector((state) => state.resume.experience.isLoading);
    const experiences = useSelector((state) => state.resume.experience.items);
    const dispatch = useDispatch();
    const removeExpHandler = (temp_id) => {
        dispatch(resumeActions.removeTempExperience({ temp_id }));
    };
    const onAddExperienceHandler = () => {
        dispatch(
            resumeActions.addExperience({
                experience: {
                    temp_id: Date.now(),
                    jobtitle: "",
                    employer: "",
                    date_from: "",
                    date_to: "",
                    duties: "",
                    openFormByDefault: true,
                },
            })
        );
    };

    const deleteExpereince = (id) => {
        dispatch(deleteExperience(id));
    };

    useEffect(() => {
        dispatch(getExperiences());
    }, []);

    return (
        <DashboardCard className="relative">
            {isLoading && <LoadingSpinner />}
            <div className="resume-section-list">
                {experiences.length === 0 && <h3>No experiences added</h3>}
                {experiences.map((exp) => (
                    <ExperienceListItem
                        experience={exp}
                        key={exp.id ? exp.id : exp.temp_id}
                        onRemoveExp={removeExpHandler.bind(null, exp.temp_id)}
                        onDeleteExp={deleteExpereince.bind(null, exp.id)}
                    />
                ))}
            </div>
            <button
                className="btn btn-secondary"
                onClick={onAddExperienceHandler}
            >
                Add Experience
            </button>
        </DashboardCard>
    );
};

export default ExperienceForm;
