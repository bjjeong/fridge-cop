import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TagInput, FormGroup } from '@blueprintjs/core';
import { useTrail } from 'react-spring';
import Typed from 'react-typed';
import cx from 'classnames';

import RecipeListItem from './components/RecipeListItem';
import { getRecipes, clearRecipes } from '../../actions/recipeActions';

const results1 = [
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
        title: 'Cinnamon Apple Crisp Crisp Crisp Crisp',
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

const Home = () => {
    const results = useSelector((state) => state.recipes.recipes);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [ingredients, setIngredients] = useState([]);
    const [moveUp, setMoveUp] = useState(results.length);

    const tagRef = useRef();
    const config = { mass: 5, tension: 2000, friction: 500 };
    const trail = useTrail(results.length, {
        config,
        opacity: results.length > 0 ? 1 : 0,
        from: { opacity: 0 },
    });

    const handleKeyDown = (e) => {
        const { value } = e.currentTarget;
        if (e.which === 188 && value.length > 0) {
            tagRef.current.addTags(value);

            e.preventDefault();
            e.stopPropagation();
        }
    };

    const handleChange = (item) => {
        setIngredients(item);
    };

    const handleSearch = async () => {
        setIsLoading(true);
        dispatch(clearRecipes());
        await dispatch(getRecipes(ingredients));
        setIsLoading(false);
    };

    const handleFocus = () => setMoveUp(true);

    const handleBlur = () => {
        if (ingredients.length === 0 && results.length === 0) {
            setMoveUp(false);
        }
    };

    return (
        <div className="home__container">
            <div className={cx('content__container', {
                _moveUp: moveUp,
            })}
            >
                <div style={styles.titleContainer}>
                    <span>What&apos;s in your&nbsp;</span>
                    <Typed
                        loop
                        typeSpeed={75}
                        backSpeed={50}
                        strings={['fridge', 'freezer', 'cabinet', 'pantry']}
                        shuffle={false}
                        backDelay={2500}
                        fadeOut={false}
                        fadeOutDelay={100}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                        smartBackspace={false}
                    />
                    <span>&nbsp;today?</span>
                </div>
                <FormGroup helperText="Press comma or Enter to add ingredients" style={styles.inputContainer}>
                    <TagInput
                        style={styles.input}
                        ref={tagRef}
                        placeholder="Apples, oranges, grapes"
                        values={ingredients}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        tagProps={{ minimal: true, round: true }}
                        inputProps={{ onFocus: handleFocus, onBlur: handleBlur }}
                        large
                    />
                </FormGroup>
                <Button
                    onClick={handleSearch}
                    intent="primary"
                    text="Search"
                    loading={isLoading}
                    disabled={ingredients.length === 0}
                    style={styles.submitButton}
                    outlined
                />
            </div>
            {
                true && (
                    <div className={cx('result__container', {
                        _hasResults: results.length > 0,
                    })}
                    >
                        {
                            trail.map((animationStyles, index) => (
                                <RecipeListItem
                                    key={results[index].id}
                                    recipe={results[index]}
                                    animationStyles={animationStyles}
                                />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

const styles = {};

styles.titleContainer = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 'calc(5px + 5vmin)',
    fontFamily: 'Maison,sans-serif',
    fontWeight: 800,
    color: '#004968',
    marginBottom: 'calc(10px + 2vmin)',
};

styles.inputContainer = {
    width: 'calc(240px + 20vmin)',
};

styles.input = {
    borderRadius: 30,
};

styles.submitButton = {
    marginTop: 'calc(5px + 1vmin)',
    padding: '10px 100px',
    borderRadius: 30,
    fontSize: 'calc(10px + 1vmin)',
};

export default Home;
