import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "../../../../store/slices/resume";
import { getEducations, deleteEducation as deleteEducationHandler } from "../../../../store/thunks/resume";
import Fade from "../../../Animations/Fade";
import DashboardCard from "../../../UI/DashboardCard";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import Item from "./Item";

const List = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.resume.education.isLoading);
    const educations = useSelector((state) => state.resume.education.items);

    const removeTempEducation = (temp_id) => {
        dispatch(resumeActions.removeEducation({ temp_id }));
    };
    const deleteEducation = (id) => {
        dispatch(deleteEducationHandler(id))
    };
    const onAddEducationHandler = () => {
        dispatch(
            resumeActions.addEducation({
                education: {
                    temp_id: Date.now(),
                    school: "",
                    field: "",
                    summary: "",
                    year: "",
                    openFormByDefault: true,
                },
            })
        );
    };

    useEffect(() => {
        dispatch(getEducations());
    }, []);

    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="resume-section-list">
                {educations.length === 0 && <h3>No Educations added</h3>}
                {educations.map((edu) => (
                    <Item
                        education={edu}
                        key={edu.id ? edu.id : edu.temp_id}
                        onRemove={removeTempEducation.bind(null, edu.temp_id)}
                        onDelete={deleteEducation.bind(null, edu.id)}
                    />
                ))}
            </div>
            <button
                className="btn btn-secondary"
                onClick={onAddEducationHandler}
            >
                Add Education
            </button>
        </DashboardCard>
    );
};

export default List;
