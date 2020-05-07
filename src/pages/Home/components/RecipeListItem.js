import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { Card, Button } from '@blueprintjs/core';

const RecipeListItem = ({ recipe, animationStyles }) => {
    const { image, usedIngredientCount, missedIngredientCount, title } = recipe;
    return (
        <animated.div style={{ ...animationStyles }}>
            <Card style={styles.container} interactive>
                <img src={image} alt={title} style={styles.imgContainer} />
                <div style={styles.topCard}>
                    <h2 style={styles.titleText}>{title}</h2>
                </div>
                <div style={styles.bottomCard}>
                    <span>
                        {`You have ${(usedIngredientCount / (usedIngredientCount + missedIngredientCount)) * 100}% of the ingredients!`}
                    </span>
                    <Button
                        text="View Recipe"
                        style={styles.viewButton}
                        outlined
                    />
                </div>
            </Card>
        </animated.div>
    );
};

const styles = {};

styles.container = {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    position: 'relative',
    width: 300,
    margin: '10px 10px 50px',
    cursor: 'pointer',
    padding: 5,
};

styles.imgContainer = {
    position: 'absolute',
    top: -40,
    left: 'auto',
    right: 'auto',
    bottom: 0,
    width: 100,
    height: 100,
    objectFit: 'cover',
    borderRadius: 15,
    border: '5px solid #fff',
};

styles.topCard = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffe1d5',
    padding: '50px 10px 0',
    color: '#282828',
    width: '100%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
};

styles.bottomCard = {
    fontFamily: 'Maison,sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 10px 10px',
    width: '100%',
};

styles.viewButton = {
    marginTop: 20,
    padding: '10px 50px',
};

styles.titleText = {
    fontSize: 'calc(10px + 1vmin)',
    fontFamily: 'Maison,sans-serif',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};

RecipeListItem.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        missedIngredientCount: PropTypes.number,
        missedIngredients: PropTypes.instanceOf(Array),
        unusedIngredients: PropTypes.instanceOf(Array),
        usedIngredientCount: PropTypes.number,
        usedIngredients: PropTypes.instanceOf(Array),
    }).isRequired,
    animationStyles: PropTypes.object.isRequired,
};

export default RecipeListItem;
