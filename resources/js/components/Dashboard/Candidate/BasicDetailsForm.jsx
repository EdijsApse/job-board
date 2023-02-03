import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getResumeBasicDetails,
    updateResumeBasicDetails,
} from "../../../store/thunks/resume";
import Fade from "../../Animations/Fade";
import BaseFormInput from "../../UI/BaseFormInput";
import BaseFormSelect from "../../UI/BaseFormSelect";
import BaseTextareaInput from "../../UI/BaseTextareaInput";
import DashboardCard from "../../UI/DashboardCard";
import LoadingSpinner from "../../UI/LoadingSpinner";
import SkillsListInput from "./SkillsListInput";

const BasicDetailsForm = () => {
    const errors = useSelector((state) => state.resume.basic.errors);
    const isLoading = useSelector((state) => state.resume.basic.isLoading);
    const details = useSelector((state) => state.resume.basic.details);
    const dispatch = useDispatch();

    const [jobtitle, setJobtitle] = useState("");
    const [experience, setExperience] = useState("");
    const [about, setAbout] = useState("");
    const [category, setCategory] = useState("");
    const [skills, setSkills] = useState([]);

    const categories = useSelector((state) => state.selectOptions.categories);

    const onSkillAddedHanlder = (skill) => {
        if (skill.trim().length) {
            const skillIndex = skills.findIndex(
                (currentSkill) => currentSkill === skill
            );
            if (skillIndex === -1) {
                setSkills((oldSkills) => {
                    return [...oldSkills, skill];
                });
            }
        }
    };

    const onSkillRemoveHandler = (skill) => {
        setSkills((oldSkills) => {
            return oldSkills.filter((currentSkill) => currentSkill !== skill);
        });
    };

    const submitBasicDetailsHandler = (e) => {
        e.preventDefault();
        const resumeDetails = {
            jobtitle: jobtitle,
            about: about,
            category_id: category,
            experience: experience,
            skills: skills,
        };

        dispatch(updateResumeBasicDetails(resumeDetails));
    };

    useEffect(() => {
        if (details.id) {
            setJobtitle(details.jobtitle);
            setExperience(details.experience);
            setAbout(details.about);
            setCategory(details.category_id);
            setSkills(details.skills);
        }
    }, [details, setJobtitle, setExperience, setAbout, setCategory, setSkills]);

    useEffect(() => {
        dispatch(getResumeBasicDetails());
    }, []);
    return (
        <DashboardCard className="relative">
            <Fade isVisible={isLoading}>
                <LoadingSpinner />
            </Fade>
            <form
                className="dashboard-form"
                onSubmit={submitBasicDetailsHandler}
            >
                <div className="row">
                    <div className="col-6">
                        <BaseFormInput
                            id="resume-jobtitle"
                            labelName="Job title"
                            labelClassName="bold"
                            value={jobtitle}
                            setInputValue={(title) => {
                                setJobtitle(title);
                            }}
                            inputErrorMessage={errors.jobtitle}
                            isRequired
                        />
                    </div>
                    <div className="col-6">
                        <BaseFormInput
                            id="resume-experience"
                            labelName="Experience (Years)"
                            labelClassName="bold"
                            value={experience}
                            setInputValue={(exp) => {
                                setExperience(exp);
                            }}
                            inputErrorMessage={errors.experience}
                            type="number"
                            isRequired
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <BaseFormSelect
                            id="resume-category"
                            labelName="Category"
                            labelClassName="bold"
                            selected={category}
                            selectValue={(cat) => {
                                setCategory(cat);
                            }}
                            placeholder="Select category of your field"
                            options={categories}
                            inputErrorMessage={errors.category_id}
                            isRequired
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <SkillsListInput
                            items={skills}
                            onSkillAdded={onSkillAddedHanlder}
                            onSkillRemove={onSkillRemoveHandler}
                            errorMessage={errors.skills}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <BaseTextareaInput
                            id="resume-about"
                            labelName="About you"
                            labelClassName="bold"
                            value={about}
                            setNewValue={(about) => {
                                setAbout(about);
                            }}
                            inputErrorMessage={errors.about}
                            isRequired
                        />
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Save Details
                </button>
            </form>
        </DashboardCard>
    );
};
export default BasicDetailsForm;
