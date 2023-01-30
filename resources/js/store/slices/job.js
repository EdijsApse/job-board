import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    currentPage: 1,
    itemsPerPage: 0,
    totalItems: 0,
    lastPage: 1,
    isLoading: false,
    formErrors: {},
};

const JobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setLoadingState(state, { payload }) {
            state.isLoading = payload.isLoading;
        },
        setFormErrors(state, { payload }) {
            state.formErrors = payload.errors;
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

export const jobActions = JobSlice.actions;

export default JobSlice.reducer;
