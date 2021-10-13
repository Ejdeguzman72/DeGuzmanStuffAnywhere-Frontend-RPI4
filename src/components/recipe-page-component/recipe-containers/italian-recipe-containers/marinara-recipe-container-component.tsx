import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const MarinaraRecipeContainer = () => {
    return (
        <Container className="marinara-sauce-recipe-container">
            <h1 className="App">Marinara Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Garlic</li>
                <li>Small onion</li>
                <li>Can of crushed tomatoes</li>
                <li>nature's seasoning</li>
                <li>Italian Seasoning</li>
                <li>Sugar</li>
                <li>Olive Oil</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Mince several cloves of garlic</li>
                <li>Chop small onion</li>
                <li>In saucepan, heat up oil</li>
                <li>Add garlic and stir for about 10 to 15 seconds</li>
                <li>Add onion and allow to cook for abouta minute or two</li>
                <li>Pour in crushed tomatoes, rinse can with about 3/4 withwater and pour water in</li>
                <li>Add about a teaspoon or so to the pot and mix</li>
                <li>Add about  a tablespoon of the Italian seasoning and mix</li>
                <li>Add about 3 tablespoons of sugar</li>
                <li>Allow to simmer</li>
            </ol>
        </Container>
    )
}

export default MarinaraRecipeContainer;