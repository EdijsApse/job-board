import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    currentPage: 1,
    lastPage: 1,
    isLoading: false,
};

const FeaturedJobsSlice = createSlice({
    name: "featuredJobs",
    initialState,
    reducers: {
        setLoadingState(state, { payload }) {
            state.isLoading = payload.isLoading;
        },
        setItems(state, { payload }) {
            const { items, meta } = payload;
            state.list = items;
            state.currentPage = meta.current_page;
            state.itemsPerPage = meta.per_page;
            state.lastPage = meta.last_page;
            state.totalItems = meta.total;
        },
    },
});

export const featuredJobsActions = FeaturedJobsSlice.actions;

export default FeaturedJobsSlice.reducer;
