import { createReducer } from '@reduxjs/toolkit';
import {
    getRecipes,
} from '../actions/recipeActions';

const initialState = {
    recipes: [],
};

const recipeReducer = createReducer(initialState, {
    [getRecipes.fulfilled]: (state, action) => {
        const searchResults = action.payload;
        return { ...state, recipes: [...searchResults] };
    },
});

export default recipeReducer;
