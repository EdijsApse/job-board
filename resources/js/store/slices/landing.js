import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded: false,
    isLoading: false,
    categories: [],
    featuredJobs: [],
    featuredCompanies: [],
    jobOpenings: 0,
};

const landingSlice = createSlice({
    name: "landing",
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            const { isLoading } = payload;
            state.isLoading = isLoading;
        },
        setIsLoaded(state, { payload }) {
            const { isLoaded } = payload;
            state.isLoaded = isLoaded;
        },
        setCategories(state, { payload }) {
            const { categories } = payload;
            state.categories = categories;
        },
        setJobOpenings(state, { payload }) {
            const { job_openings_count } = payload;
            state.jobOpenings = job_openings_count;
        },
        setFeaturedJobs(state, { payload }) {
            const { featured_jobs } = payload;
            state.featuredJobs = featured_jobs;
        },
        setFeaturedCompanies(state, { payload }) {
            const { featured_companies } = payload;
            state.featuredCompanies = featured_companies;
        },
    },
});

export default landingSlice.reducer;

export const landingActions = landingSlice.actions;
