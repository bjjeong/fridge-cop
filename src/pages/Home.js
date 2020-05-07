import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TagInput, FormGroup } from '@blueprintjs/core';
import Typed from 'react-typed';
import { getRecipes } from '../actions/recipeActions';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const tagInputRef = useRef();
    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        const { value } = e.currentTarget;
        if (e.which === 188 && value.length > 0) {
            tagInputRef.current.addTags(value);

            e.preventDefault();
            e.stopPropagation();
        }
    };

    const handleChange = (ingredients) => {
        setItems(ingredients);
    };

    const handleSearch = async () => {
        setIsLoading(true);
        await dispatch(getRecipes(items));
        setIsLoading(false);
    };

    return (
        <div style={styles.container}>
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
            <FormGroup helperText="Press comma or Enter to add ingredients" style={styles.card}>
                <TagInput
                    style={styles.input}
                    ref={tagInputRef}
                    placeholder="Apples, oranges, grapes"
                    values={items}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    tagProps={{ minimal: true, round: true }}
                    large
                />
            </FormGroup>
            <Button
                onClick={handleSearch}
                intent="primary"
                text="Search"
                loading={isLoading}
                style={styles.submitButton}
                outlined
            />
        </div>
    );
};

const styles = {};

styles.container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: '#FFB697',
};

styles.titleContainer = {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '5.5vw',
    fontFamily: 'Maison,sans-serif',
    fontWeight: 800,
    color: '#004968',
    marginBottom: 50,
};

styles.card = {
    maxWidth: '70vw',
    minWidth: '30vw',
};

styles.input = {
    borderRadius: 30,
};

styles.submitButton = {
    marginTop: 20,
    padding: '10px 100px',
    borderRadius: 30,
    fontSize: 20,
};

export default Home;
