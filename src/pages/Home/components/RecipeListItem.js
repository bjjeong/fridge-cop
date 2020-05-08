import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import { Card, Button } from '@blueprintjs/core';
import { capitalize } from '../../../utils/helpers';
import Image from '../../../components/image/Image';

const RecipeListItem = ({ recipe, animationStyles }) => {
    const [flipped, setFlipped] = useState(false);
    const {
        image, usedIngredientCount, missedIngredientCount,
        title, usedIngredients, missedIngredients,
    } = recipe;

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    const flipBack = { opacity: opacity.interpolate((o) => 1 - o), transform };
    const flipForward = { opacity, transform: transform.interpolate((t) => `${t} rotateX(180deg)`) };
    const AnimatedCard = animated(Card);

    return (
        <animated.div
            style={{ ...animationStyles, ...styles.container }}
            onClick={() => setFlipped(!flipped)}
        >
            <AnimatedCard interactive style={{ ...flipBack, ...styles.card, zIndex: flipped ? 0 : 2 }}>
                <Image src={image} alt={title} style={styles.imgContainer} />
                <div style={styles.topSection}>
                    <h2 style={styles.titleText}>{title}</h2>
                </div>
                <div style={styles.bottomSection}>
                    <span>
                        {`You have ${Math.round((usedIngredientCount / (usedIngredientCount + missedIngredientCount)) * 100)}% of the ingredients!`}
                    </span>
                    <Button
                        text="View Ingredients"
                        onClick={() => setFlipped(!flipped)}
                        style={{ ...styles.viewButton, marginTop: 20 }}
                        outlined
                    />
                    <Link to={`/recipes/${recipe.id}`}>
                        <Button
                            text="View Recipe"
                            style={{ ...styles.viewButton, marginTop: 10 }}
                            outlined
                        />
                    </Link>
                </div>
            </AnimatedCard>
            <AnimatedCard interactive style={{ ...flipForward, ...styles.card }}>
                <div style={{ ...styles.topSection, padding: '0' }}>
                    <h2 style={styles.titleText}>Ingredients</h2>
                </div>
                <div style={styles.ingredientsContainer}>
                    <div style={styles.usedText}>
                        {
                            usedIngredients.map((used) => capitalize(used.name)).join(', ')
                        }
                    </div>
                    <div style={styles.missedText}>
                        {
                            missedIngredients.map((missed) => capitalize(missed.name)).join(', ')
                        }
                    </div>
                </div>
            </AnimatedCard>
        </animated.div>
    );
};

const styles = {};

styles.container = {
    width: 300,
    height: 280,
    margin: '10px 10px 50px',
};

styles.card = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    width: 300,
    height: 280,
    borderRadius: 20,
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

styles.topSection = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffe1d5',
    padding: '50px 10px 0',
    color: '#282828',
    width: '100%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
};

styles.bottomSection = {
    fontFamily: 'Maison,sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 10px 10px',
    width: '100%',
};

styles.ingredientsContainer = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 5,
};

styles.viewButton = {
    padding: '10px 0px',
    width: 180,
};

styles.titleText = {
    fontSize: 'calc(10px + 1vmin)',
    fontFamily: 'Maison,sans-serif',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};

styles.usedText = {
    fontFamily: 'Maison,sans-serif',
    color: '#38783B',
};

styles.missedText = {
    fontFamily: 'Maison,sans-serif',
    color: '#5c7080',
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
