import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../api/recipeAPI';

export const getRecipes = createAsyncThunk(
    'GET_RECIPES',
    async (ingredients) => {
        // ingredients must be comma-separated string
        const response = await fetchRecipes(ingredients.join(','));
        return response.data;
    },
);

export const getRecipe = createAsyncThunk();
