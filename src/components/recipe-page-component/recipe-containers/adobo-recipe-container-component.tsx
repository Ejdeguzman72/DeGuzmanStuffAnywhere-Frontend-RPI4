import React from 'react';
import { Container } from 'react-bootstrap';

const AdoboRecipeContainerComponent = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Adobo</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Chicken/Pork</li>
                <li>Soy Sauce</li>
                <li>Vinegar</li>
                <li>Onion</li>
                <li>Garlic</li>
                <li>Black Pepper</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Rinse meat and place in pot with cover</li>
                <li>Add three cook  spoons of soy sauce</li>
                <li>Slice an onion and place in pot</li>
                <li>Smash and mince several cloves of garlic and put in pot</li>
                <li>Sprinkle some crushed black pepper</li>
                <li>cover and allow to boil</li>
                <li>turn down heat and allow to simmer for about 30 minutes</li>
            </ol>
        </Container>
    )
}

export default AdoboRecipeContainerComponent;