import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./slices/alert";
import authSlice from "./slices/auth";
import selectOptionsSlice from "./slices/select-options";
import employerSlice from "./slices/employer";
import profileSlice from "./slices/profile";
import resumeSlice from "./slices/resume";
import jobSlice from "./slices/job";
import candidatSlice from "./slices/candidate";
import landingSlice from "./slices/landing";
import dashboardSlice from "./slices/dashboard";
import employerOffersSlice from "./slices/offers/employer";
import employerApplicationsSlice from "./slices/applications/employer";
import employerJobsSlice from "./slices/employerJobs";
import candidateOffersSlice from "./slices/offers/candidate";
import candidateApplicationsSlice from "./slices/applications/candidate";
import featuredJobSlice from "./slices/featured/jobs";

const store = configureStore({
    reducer: {
        auth: authSlice,
        alert: alertSlice,
        selectOptions: selectOptionsSlice,
        employer: employerSlice,
        profile: profileSlice,
        resume: resumeSlice,
        job: jobSlice,
        candidates: candidatSlice,
        landing: landingSlice,
        dashboard: dashboardSlice,
        employerOffers: employerOffersSlice,
        employerApplications: employerApplicationsSlice,
        employerJobs: employerJobsSlice,
        candidateOffers: candidateOffersSlice,
        candidateApplications: candidateApplicationsSlice,
        featuredJobs: featuredJobSlice
    },
});

export default store;
