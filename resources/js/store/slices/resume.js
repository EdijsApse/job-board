import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basic: {
        details: {},
        isLoading: false,
        errors: {},
    },
    salary: {
        details: {},
        isLoading: false,
        errors: {},
    },
    experience: {
        items: [],
        isLoading: false,
    },
    education: {
        items: [],
        isLoading: false,
    },
    language: {
        items: [],
        isLoading: false,
    },
};

const BasicDetailsReducers = {
    setBasicFormErrors(state, { payload }) {
        state.basic.errors = payload.errors;
    },
    setBasicIsLoadingState(state, { payload }) {
        state.basic.isLoading = payload.isLoading;
    },
    setBasicDetails(state, { payload }) {
        state.basic.details = payload.details;
    },
};

const SalaryDetailsReducers = {
    setSalaryFormErrors(state, { payload }) {
        state.salary.errors = payload.errors;
    },
    setSalaryIsLoadingState(state, { payload }) {
        state.salary.isLoading = payload.isLoading;
    },
    setSalaryDetails(state, { payload }) {
        state.salary.details = payload.details;
    },
};

const ExperienceReducers = {
    addExperience(state, { payload }) {
        const { experience } = payload;
        state.experience.items = [...state.experience.items, experience];
    },
    removeTempExperience(state, { payload }) {
        const { temp_id } = payload;
        state.experience.items = state.experience.items.filter(
            (exp) => exp.temp_id !== temp_id
        );
    },
    removeExperience(state, { payload }) {
        const { id } = payload;
        state.experience.items = state.experience.items.filter(
            (exp) => exp.id !== id
        );
    },
    replaceExperience(state, { payload }) {
        const { experience, id } = payload;
        const index = state.experience.items.findIndex((exp) => exp.id === id);
        if (index !== -1) {
            state.experience.items[index] = experience;
        }
    },
    setExperiences(state, { payload }) {
        const { experiences } = payload;
        state.experience.items = experiences;
    },
    setExperienceLoadingState(state, { payload }) {
        const { isLoading } = payload;
        state.experience.isLoading = isLoading;
    },
};

const EducationReducers = {
    addEducation(state, { payload }) {
        const { education } = payload;
        state.education.items = [...state.education.items, education];
    },
    removeEducation(state, { payload }) {
        const { temp_id, id } = payload;
        if (temp_id) {
            state.education.items = state.education.items.filter(
                (edu) => edu.temp_id !== temp_id
            );
        } else {
            state.education.items = state.education.items.filter(
                (edu) => edu.id !== id
            );
        }
    },
    replaceEducation(state, { payload }) {
        const { education, id } = payload;
        const index = state.education.items.findIndex((edu) => edu.id === id);
        if (index !== -1) {
            state.education.items[index] = education;
        }
    },
    setEducations(state, { payload }) {
        const { educations } = payload;
        state.education.items = educations;
    },
    setEducationLoadingState(state, { payload }) {
        const { isLoading } = payload;
        state.education.isLoading = isLoading;
    },
};

const LanguageReducer = {
    addLanguage(state, { payload }) {
        const { language } = payload;
        state.language.items = [...state.language.items, language];
    },
    removeLanguage(state, { payload }) {
        const { temp_id, id } = payload;
        if (temp_id) {
            state.language.items = state.language.items.filter(
                (lang) => lang.temp_id !== temp_id
            );
        } else {
            state.language.items = state.language.items.filter(
                (lang) => lang.id !== id
            );
        }
    },
    replaceLanguage(state, { payload }) {
        const { language, id } = payload;
        const index = state.language.items.findIndex((lang) => lang.id === id);
        if (index !== -1) {
            state.language.items[index] = language;
        }
    },
    setLanguages(state, { payload }) {
        const { languages } = payload;
        state.language.items = languages;
    },
    setLanguageLoadingState(state, { payload }) {
        const { isLoading } = payload;
        state.language.isLoading = isLoading;
    },
};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        ...BasicDetailsReducers,
        ...SalaryDetailsReducers,
        ...ExperienceReducers,
        ...EducationReducers,
        ...LanguageReducer,
    },
});

export const resumeActions = resumeSlice.actions;

export default resumeSlice.reducer;
