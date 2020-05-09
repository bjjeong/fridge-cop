import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes, fetchRecipeById } from '../api/recipeAPI';
import { showLoader, hideLoader, showAlert } from './interfaceActions';

export const clearRecipes = createAction('CLEAR_RECIPES');

export const getRecipeById = createAsyncThunk(
    'GET_RECIPE_BY_ID',
    async (recipeId, { dispatch }) => {
        try {
            dispatch(showLoader('recipeView'));
            const response = await fetchRecipeById(recipeId);
            return response.data;
        } catch (e) {
            dispatch(showAlert('Something went wrong while fetching the recipe'));
        } finally {
            dispatch(hideLoader('recipeView'));
        }
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
