import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    list: [],
};

const employerOffers = createSlice({
    name: "employerOffers",
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            const { isLoading } = payload;
            state.isLoading = isLoading;
        },
        setList(state, { payload }) {
            const { offers } = payload;
            state.list = offers;
        },
    },
});

export const employerOffersActions = employerOffers.actions;

export default employerOffers.reducer;
