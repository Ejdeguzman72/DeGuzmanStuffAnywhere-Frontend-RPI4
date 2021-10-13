import React from 'react';
import { Container } from 'react-bootstrap';

const UkoyRecipeContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Ukoy - Leek and Shrimp Fritters</h1>
            <h3>Ingredients - Fritter</h3>
            <ul className="list">
                <li>Leeks (cut up)</li>
                <li>Tempura Batter</li>
                <li>Shrimp (cut up)</li>
            </ul>
            <h3>Ingredients - Sauce</h3>
            <ul className="list">
                <li>Vinegar</li>
                <li>Garlic</li>
                <li>Black ground pepper</li>
            </ul>
            <h3>Directions - Fritter</h3>
            <ol>
                <li>Heat stove up to high</li>
                <li>Fill pan with light caress of oil</li>
                <li>Crack 10 eggs and use yolk only</li>
                <li>Mix tempura batter with leek and shrimp</li>
                <li>take a ladle and place in pan like small pancakes</li>
                <li>Cook till golden and crispy on bottom and flip. Cook till golden brown and cooked</li>
            </ol>
            <h3>Directionns - Sauce</h3>
            <ol>
                <li>Fill small bowl with a 1/4 cup of vinegar</li>
                <li>Sprinkle black ground pepper in the vinegar </li>
                <li>Crush some garlic cloves and throw in the mix</li>
            </ol>
        </Container>
    )
}

export default UkoyRecipeContainer;