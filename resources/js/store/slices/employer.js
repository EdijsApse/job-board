import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    errors: {},
    list: [],
    currentPage: 1,
    itemsPerPage: 0,
    totalItems: 0,
    lastPage: 1,
};

const employerSlice = createSlice({
    name: "employer",
    initialState,
    reducers: {
        setLoadingState(state, { payload }) {
            const { isLoading } = payload;
            state.isLoading = isLoading;
        },
        setFormErrors(state, { payload }) {
            const { errors } = payload;
            state.errors = errors;
        },
        setListingDetails(state, { payload }) {
            const { items, meta } = payload;
            state.list = items;
            state.currentPage = meta.current_page;
            state.itemsPerPage = meta.per_page;
            state.lastPage = meta.last_page;
            state.totalItems = meta.total;
        },
    },
});

export const employerActions = employerSlice.actions;

export default employerSlice.reducer;
