import axios from 'axios';

export const fetchRecipes = (ingredients) => axios.get(
    'https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
            ingredients,
            number: 10,
            ignorePantry: false,
            apiKey: process.env.REACT_APP_RECIPE_API_KEY,
        },
    },
);

export const fetchRecipe = (recipeId) => axios.get(

);
