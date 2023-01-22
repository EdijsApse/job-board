import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    cities: [],
    companySizes: [],
    categories: [],
    genders: [],
    salaryTypes: [],
    languages:[],
    languageLevels:[]
};
/**
 * Converts item to format, which is needed for BaseFormSelect component
 *
 * @param {*} item
 * @param {*} labelKey
 * @returns
 */
const convertToLabelValue = (item, labelKey = "name") => {
    return {
        value: item.id,
        label: item[labelKey],
    };
};

const selectOptionsSlice = createSlice({
    name: "select-options",
    initialState,
    reducers: {
        setSelectOptions(state, { payload }) {
            const {
                countries,
                cities,
                company_sizes,
                categories,
                genders,
                salary_types,
                languages,
                language_levels,
            } = payload;
            state.countries = countries.map((item) =>
                convertToLabelValue(item)
            );
            state.cities = cities.map((item) => convertToLabelValue(item));
            state.categories = categories.map((item) =>
                convertToLabelValue(item)
            );
            state.companySizes = company_sizes.map((item) => {
                return convertToLabelValue(item, "size");
            });
            state.genders = genders.map((item) => convertToLabelValue(item));
            state.salaryTypes = salary_types.map((item) =>
                convertToLabelValue(item)
            );
            state.languages = languages.map((item) =>
                convertToLabelValue(item)
            );
            state.languageLevels = language_levels.map((item) =>
                convertToLabelValue(item)
            );
        },
    },
});

export const selectOptionsActions = selectOptionsSlice.actions;

export default selectOptionsSlice.reducer;
