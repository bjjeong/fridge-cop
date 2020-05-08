import { createReducer } from '@reduxjs/toolkit';
import {
    getRecipeById,
    getRecipes,
    clearRecipes,
} from '../actions/recipeActions';

const initialState = {
    recipeInfo: {},
    recipes: [],
};

const recipeReducer = createReducer(initialState, {
    [clearRecipes]: () => {
        return initialState;
    },

    [getRecipeById.fulfilled]: (state, action) => {
        const recipe = action.payload;
        return { ...state, recipeInfo: { ...recipe } };
    },

    [getRecipes.fulfilled]: (state, action) => {
        const searchResults = action.payload;
        return { ...state, recipes: [...searchResults] };
    },
});

export default recipeReducer;
