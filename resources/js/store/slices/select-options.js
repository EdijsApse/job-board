import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    cities: [],
    companySizes: [],
    categories: [],
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
            const { countries, cities, company_sizes, categories } = payload;
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
        },
    },
});

export const selectOptionsActions = selectOptionsSlice.actions;

export default selectOptionsSlice.reducer;
