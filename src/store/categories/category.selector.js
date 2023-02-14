import { createSelector } from "reselect"

const selectCategoryReducer = (state) => state.categories

// createSelector does memoization, if category changes then only it will update
export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)

// createSelector->As long as categoriesArray does not change, do not rerun this method, just give back the previously calculated value
export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => 
        categories.reduce((acc, category) => {
            const { title, items } = category
            acc[title.toLowerCase()] = items
            return acc
        }, {})
)