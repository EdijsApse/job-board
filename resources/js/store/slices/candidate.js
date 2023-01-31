import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    list: [],
    currentPage: 1,
    itemsPerPage: 0,
    totalItems: 0,
    lastPage: 1,
};

const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            const { isLoading } = payload;
            state.isLoading = isLoading;
        },
        setListDetails(state, { payload }) {
            const { items, meta } = payload;
            state.list = items;
            state.currentPage = meta.current_page;
            state.itemsPerPage = meta.per_page;
            state.lastPage = meta.last_page;
            state.totalItems = meta.total;
        },
    },
});

export const candidateActions = candidateSlice.actions;

export default candidateSlice.reducer;
