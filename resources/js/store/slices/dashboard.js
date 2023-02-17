import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isLoaded: false,
    candidateDashboard: {
        pendingApplicationsCount: 0,
        pendingApplications: [],
    },
    employerDashboard: {
        pendingApplicationsCount: 0,
        pendingOffersCount: 0,
        applications: [],
        offers: [],
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
            const { applications, pending_applications_count } = payload;
            state.candidateDashboard.pendingApplicationsCount =
                pending_applications_count;
            state.candidateDashboard.applications = applications;
            state.isLoaded = true;
        },
        setEmployerDashboard(state, { payload }) {
            const {
                applications,
                offers,
                pending_applications_count,
                pending_offers_count,
            } = payload;
            state.employerDashboard.applications = applications;
            state.employerDashboard.offers = offers;
            state.employerDashboard.pendingApplicationsCount =
                pending_applications_count;
            state.employerDashboard.pendingOffersCount = pending_offers_count;
            state.isLoaded = true;
        },
    },
});

export default dashboardSlice.reducer;

export const dashboardAction = dashboardSlice.actions;
