import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../api/recipeAPI';

export const clearRecipes = createAction('CLEAR_RECIPES');

export const getRecipes = createAsyncThunk(
    'GET_RECIPES',
    async (ingredients) => {
        // ingredients must be comma-separated string
        // const response = await fetchRecipes(ingredients.join(','));
        // return response.data;

        return [
            {
                id: 47950,
                image: 'https://spoonacular.com/recipeImages/47950-312x231.jpg',
                imageType: 'jpg',
                likes: 35,
                missedIngredientCount: 3,
                missedIngredients: [
                    {
                        aisle: 'Baking',
                        amount: 0.75,
                        id: 19334,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/light-brown-sugar.jpg',
                        meta: ['packed'],
                        metaInformation: ['packed'],
                        name: 'brown sugar',
                        original: '3/4 cup firmly packed brown sugar',
                        originalName: 'firmly packed brown sugar',
                        originalString: '3/4 cup firmly packed brown sugar',
                        unit: 'cup',
                        unitLong: 'cups',
                        unitShort: 'cup',
                    },
                ],
                title: 'Cinnamon Apple Crisp',
                unusedIngredients: [],
                usedIngredientCount: 2,
                usedIngredients: [
                    {
                        aisle: 'Produce',
                        amount: 6,
                        id: 9003,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                        meta: ['cored', 'peeled', 'sliced'],
                        metaInformation: ['cored', 'peeled', 'sliced'],
                        name: 'apples',
                        original: '6 medium (6 cups) apples, peeled, cored, sliced',
                        originalName: 'medium apples, peeled, cored, sliced',
                        originalString: '6 medium (6 cups) apples, peeled, cored, sliced',
                        unit: 'cups',
                        unitLong: 'cups',
                        unitShort: 'cup',
                    },
                ],
            },
            {
                id: 47951,
                image: 'https://spoonacular.com/recipeImages/47950-312x231.jpg',
                imageType: 'jpg',
                likes: 35,
                missedIngredientCount: 3,
                missedIngredients: [
                    {
                        aisle: 'Baking',
                        amount: 0.75,
                        id: 19335,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/light-brown-sugar.jpg',
                        meta: ['packed'],
                        metaInformation: ['packed'],
                        name: 'brown sugar',
                        original: '3/4 cup firmly packed brown sugar',
                        originalName: 'firmly packed brown sugar',
                        originalString: '3/4 cup firmly packed brown sugar',
                        unit: 'cup',
                        unitLong: 'cups',
                        unitShort: 'cup',
                    },
                ],
                title: 'Cinnamon Pineapple Crisp',
                unusedIngredients: [],
                usedIngredientCount: 2,
                usedIngredients: [
                    {
                        aisle: 'Produce',
                        amount: 6,
                        id: 9004,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                        meta: ['cored', 'peeled', 'sliced'],
                        metaInformation: ['cored', 'peeled', 'sliced'],
                        name: 'apples',
                        original: '6 medium (6 cups) apples, peeled, cored, sliced',
                        originalName: 'medium apples, peeled, cored, sliced',
                        originalString: '6 medium (6 cups) apples, peeled, cored, sliced',
                        unit: 'cups',
                        unitLong: 'cups',
                        unitShort: 'cup',
                    },
                ],
            },
            {
                id: 47952,
                image: 'https://spoonacular.com/recipeImages/47950-312x231.jpg',
                imageType: 'jpg',
                likes: 35,
                missedIngredientCount: 3,
                missedIngredients: [
                    {
                        aisle: 'Baking',
                        amount: 0.75,
                        id: 19336,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/light-brown-sugar.jpg',
                        meta: ['packed'],
                        metaInformation: ['packed'],
                        name: 'brown sugar',
                        original: '3/4 cup firmly packed brown sugar',
                        originalName: 'firmly packed brown sugar',
                        originalString: '3/4 cup firmly packed brown sugar',
                        unit: 'cup',
                        unitLong: 'cups',
                        unitShort: 'cup',
                    },
                ],
                title: 'Sugar Apple Crisp',
                unusedIngredients: [],
                usedIngredientCount: 2,
                usedIngredients: [
                    {
                        aisle: 'Produce',
                        amount: 6,
                        id: 9005,
                        image: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
                        meta: ['cored', 'peeled', 'sliced'],
                        metaInformation: ['cored', 'peeled', 'sliced'],
                        name: 'apples',
                        original: '6 medium (6 cups) apples, peeled, cored, sliced',
                        originalName: 'medium apples, peeled, cored, sliced',
                        originalString: '6 medium (6 cups) apples, peeled, cored, sliced',
                        unit: 'cups',
                        unitLong: 'cups',
                        unitShort: 'cup',
                    },
                ],
            },
        ];
    },
);
