import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    currentPage: 1,
    lastPage: 1,
    list: [],
};

const employerJobs = createSlice({
    name: "employerJobs",
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            const { isLoading } = payload;
            state.isLoading = isLoading;
        },
        setList(state, { payload }) {
            const { items, meta } = payload;
            state.list = items;
            state.currentPage = meta.current_page;
            state.lastPage = meta.last_page;
        },
    },
});

export const employerJobsActions = employerJobs.actions;

export default employerJobs.reducer;
