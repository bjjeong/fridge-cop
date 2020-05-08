import axios from 'axios';

export const fetchRecipes = (ingredients) => axios.get(
    'https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
            ingredients,
            number: 25,
            ignorePantry: true,
            apiKey: '68e3bc5eaf6a4f2b8e0504037492d894',
            // apiKey: process.env.REACT_APP_RECIPE_API_KEY,
        },
    },
);

export const fetchRecipe = (recipeId) => axios.get(

);
