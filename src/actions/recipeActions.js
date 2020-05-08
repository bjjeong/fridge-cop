import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes, fetchRecipeById } from '../api/recipeAPI';

export const clearRecipes = createAction('CLEAR_RECIPES');

export const getRecipeById = createAsyncThunk(
    'GET_RECIPE_BY_ID',
    async (recipeId) => {
        const response = await fetchRecipeById(recipeId);
        return response.data;
    },
);

export const getRecipes = createAsyncThunk(
    'GET_RECIPES',
    async (ingredients) => {
        // ingredients must be comma-separated string
        const response = await fetchRecipes(ingredients.join(','));
        return response.data;
    },
);
