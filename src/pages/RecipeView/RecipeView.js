import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Card, Button, AnchorButton, Icon } from '@blueprintjs/core';

import { getRecipeById } from '../../actions/recipeActions';
import { removeHTMLTags } from '../../utils/helpers';

const Meta = ({ title, description }) => {
    return (
        <span style={{ marginRight: 10 }}>
            <strong>{title}</strong>
            {': '}
            {description}
        </span>
    );
};

const RecipeView = (props) => {
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.recipes.recipeInfo);
    const { id } = useParams();

    useEffect(() => {
        (async function getRecipe() {
            await dispatch(getRecipeById(id));
        }());
        setLoading(false);
    }, [id, dispatch]);

    if (loading) {
        return null;
    }

    return (
        <div style={styles.container}>
            <Link to="/">
                <Button
                    style={styles.backButton}
                    icon="arrow-left"
                    text="Back"
                    minimal
                />
            </Link>
            {/* {
                loading ? <Spinner /> : null
            } */}
            <Card elevation={2} style={styles.card}>
                <img src={recipe.image} alt={recipe.title} style={styles.imgContainer} />
                <AnchorButton
                    href={recipe.sourceUrl}
                    target="_blank"
                    style={styles.sourceButton}
                    text="Source"
                    icon={<Icon icon="link" iconSize="calc(5px + 1vmin)" />}
                    minimal
                />
                <div style={styles.recipeInfoContainer}>
                    <span style={styles.title}>{recipe.title}</span>
                    <div style={styles.summary} className="line-clamp">{removeHTMLTags(recipe.summary)}</div>
                    <div style={styles.divider} />
                    <div style={styles.meta}>
                        <Meta title="Course" description={recipe.dishTypes?.join('/')} />
                        <Meta title="Ready in" description={recipe.readyInMinutes} />
                    </div>
                    <div style={styles.meta}>
                        <Meta title="Cuisine" description={recipe.cuisines?.join('/')} />
                        <Meta title="Servings" description={recipe.servings} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

const styles = {};

styles.container = {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffe1d5',
};

styles.card = {
    marginTop: 'calc((70px + 25vmin)/2)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'calc(90vmin)',
    borderRadius: 10,
    marginBottom: '5vmin',
};

styles.recipeInfoContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 'calc((50px + 20vmin)/2)',
};

styles.title = {
    fontSize: 'calc(5px + 2vmin)',
    fontFamily: 'Maison,sans-serif',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '1vmin',
};

styles.summary = {
    fontSize: 'calc(8px + 1vmin)',
    fontFamily: 'Maison,sans-serif',
    textAlign: 'center',
    marginBottom: '1vmin',
};

styles.meta = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '1.5vmin',
    fontSize: 'calc(5px + 1vmin)',
    fontFamily: 'Maison,sans-serif',
};

styles.imgContainer = {
    position: 'absolute',
    top: 'calc(-1 * (50px + 20vmin)/2)',
    left: 'auto',
    right: 'auto',
    width: 'calc(50px + 20vmin)',
    height: 'calc(50px + 20vmin)',
    objectFit: 'cover',
    borderRadius: 15,
    border: '5px solid #fff',
};

styles.backButton = {
    position: 'absolute',
    fontSize: 'calc(8px + 1vmin)',
    fontFamily: 'Maison,sans-serif',
    color: '#004968',
    left: 10,
    top: 10,
};

styles.sourceButton = {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 'calc(5px + 1vmin)',
    fontFamily: 'Maison,sans-serif',
};

styles.divider = {
    height: 1,
    backgroundColor: '#636363',
    width: '100%',
    margin: '2vmin 0 1vmin',
};

RecipeView.propTypes = {};

export default RecipeView;
