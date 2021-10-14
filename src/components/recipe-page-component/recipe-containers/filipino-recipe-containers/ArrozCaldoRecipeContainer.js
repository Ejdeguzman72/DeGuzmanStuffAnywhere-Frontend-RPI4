import React from 'react';
import { Container } from 'react-bootstrap';

const ArrozCaldoRecipeContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Arroz Caldo</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>2 tablespoons olive oil </li>
                <li>1 onion, diced</li>
                <li>2 cloves garlic, crushed</li>
                <li>1 (2 inch) piece fresh ginger, peeled and thinly sliced</li>
                <li>2 ¼ pounds chicken wings, split and tips discarded</li>
                <li>1 tablespoon fish sauce (Optional)</li>
                <li>5 ¼ cups chicken broth</li>
                <li>1 cup glutinous sweet rice</li>
                <li>salt and pepper to taste</li>
                <li>1 green onion, chopped</li>
                <li>1 lemon, sliced (Optional)</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Heat the olive oil in a large pot over medium heat; cook and stir the onion, garlic, and ginger in the hot oil until fragrant, about 5 minutes. Add the chicken wings; cook and stir together for 1 minute. Stir the fish sauce into the pot, cover, and cook another 2 minutes.</li>
                <li>Pour the chicken broth into the pot. Add the sweet rice and stir. Bring the mixture to a boil; cover and cook for 10 minutes, stirring occasionally to assure the rice is not sticking to the bottom of the pot. Season with salt and pepper. Garnish with the green onion, and serve with lemon slices and additional fish sauce, if desired.</li>
            </ol>
        </Container>
    )
}

export default ArrozCaldoRecipeContainer;