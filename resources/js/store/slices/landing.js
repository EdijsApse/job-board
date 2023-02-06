import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded: false,
    isLoading: false,
    categories: [],
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
    },
});

export default landingSlice.reducer;

export const landingActions = landingSlice.actions;
