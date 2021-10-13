import React from 'react';
import { Container } from 'react-bootstrap';

const StuffedShellsContainer = () => {
    return (
        <Container className="meat-sauce-recipe-container">
            <h1 className="App">Stuffed Shells Pasta Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Large package of jumbo pasta shells</li>
                <li>Medium Onion</li>
                <li>1 egg</li>
                <li>Ricotta cheese</li>
                <li>Nature's seasoning</li>
                <li>2 cans of crushed tomatoes</li>
                <li>sugar</li>
                <li>salt</li>
                <li>pepper</li>
                <li>shredded mozarella cheese</li>
                <li>spinach</li>
                <li>italian seasoning</li>
                <li>parmesan cheese</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Preheat oven to 375 degrees F</li>
                <li>Coat a 9 x 13 baking pan with cooking spray</li>
                <li>Spread 1 1/2 cups of the marinara sauce in an even layer in the bottom of the pan.</li>
                <li>Place the ricotta cheese, 1 1/2 cups of mozzarella cheese, spinach, Italian seasoning, egg, onion, salt, pepper and parmesan cheese in a bowl. Stir to combine.</li>
                <li>Spoon the remaining marinara sauce over the shells, then sprinkle the other 1 1/2 cups of cheese over the top.</li>
                <li>Cover the dish with foil. Bake for 20 minutes. Uncover the pan, then bake for an additional 10 minutes or until cheese is melted and starting to brown.</li>
                <li>Sprinkle with parsley, then serve.</li>
            </ol>
        </Container>
    )
}

export default StuffedShellsContainer;