import React from 'react';
import { Container } from 'react-bootstrap';

const MeatballsRecipeContainer = () => {
    return (
        <Container className="meat-sauce-recipe-container">
            <h1 className="App">Meatballs Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Large package of ground beef</li>
                <li>Medium Onion</li>
                <li>2  eggs</li>
                <li>4 slices of bread</li>
                <li>Nature's seasoning</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Chop onion</li>
                <li>Mix together the grondbeef, eggs, and nature's seasoning</li>
                <li>Mix in onion</li>
                <li>Cut the bread into small cubes</li>
                <li>Mix in the bread</li>
                <li>Make meat balls</li>
            </ol>
        </Container>
    )
}

export default MeatballsRecipeContainer;