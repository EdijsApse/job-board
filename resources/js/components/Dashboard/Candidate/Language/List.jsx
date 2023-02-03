import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resumeActions } from "../../../../store/slices/resume";
import {
    deleteLanguage,
    getResumeLanguages,
} from "../../../../store/thunks/resume";
import Fade from "../../../Animations/Fade";
import DashboardCard from "../../../UI/DashboardCard";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import Item from "./Item";

const List = () => {
    const isLoading = useSelector((state) => state.resume.language.isLoading);
    const languages = useSelector((state) => state.resume.language.items);
    const dispatch = useDispatch();
    const removeHandler = (temp_id) => {
        dispatch(resumeActions.removeLanguage({ temp_id }));
    };
    const onAddHandler = () => {
        dispatch(
            resumeActions.addLanguage({
                language: {
                    temp_id: Date.now(),
                    language_id: "",
                    language_level_id: "",
                    additional_notes: "",
                    openFormByDefault: true,
                },
            })
        );
    };

    const deleteLanguageHandler = (id) => {
        dispatch(deleteLanguage(id));
    };

    useEffect(() => {
        dispatch(getResumeLanguages());
    }, []);

    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <div className="resume-section-list">
                {languages.length === 0 && <h3>No resume languages added</h3>}
                {languages.map((lang) => (
                    <Item
                        language={lang}
                        key={lang.id ? lang.id : lang.temp_id}
                        onRemove={removeHandler.bind(null, lang.temp_id)}
                        onDelete={deleteLanguageHandler.bind(null, lang.id)}
                    />
                ))}
            </div>
            <button className="btn btn-secondary" onClick={onAddHandler}>
                Add Language
            </button>
        </DashboardCard>
    );
};

export default List;
