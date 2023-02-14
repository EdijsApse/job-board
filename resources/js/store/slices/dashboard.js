import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isLoaded: false,
    candidateDashboard: {
        pending_applications: 0,
        applications: [],
    },
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            const { isLoading } = payload;
            state.isLoading = isLoading;
        },
        setCandidateDashboard(state, { payload }) {
            const { applications, pending_applications } = payload;
            state.candidateDashboard.pendingApplications = pending_applications;
            state.candidateDashboard.applications = applications;
            state.isLoaded = true;
        },
    },
});

export default dashboardSlice.reducer;

export const dashboardAction = dashboardSlice.actions;
