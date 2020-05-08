import axios from 'axios';

export const fetchRecipes = (ingredients) => axios.get(
    'https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
            ingredients,
            number: 25,
            ignorePantry: true,
            apiKey: process.env.REACT_APP_RECIPE_API_KEY,
        },
    },
);

export const fetchRecipe = (recipeId) => axios.get(

);
