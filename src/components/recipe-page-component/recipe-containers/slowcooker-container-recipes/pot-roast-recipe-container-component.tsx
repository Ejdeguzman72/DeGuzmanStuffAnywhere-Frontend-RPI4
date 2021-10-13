import React from 'react';
import { Container } from 'react-bootstrap';

const PotRoastRecipeContainer = () => {
    return (
        <Container className="pot-roast-recipe-container">
            <h1 className="App">Pot Roast Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Garlic</li>
                <li>Beef chuck roast</li>
                <li>Nature's seasoning</li>
                <li>Carrots</li>
                <li>Potatoes</li>
                <li>Green pepper</li>
                <li>Onion</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Mince garlic</li>
                <li>Make cuts into beef that do not go all the way through</li>
                <li>Place garlic and nature's seasoning into incisions</li>
                <li>Peel carrots and potatoes and slice into bite-sized pieces</li>
                <li>Slice green pepper into strips</li>
                <li>Quarter onion</li>
                <li>Set the meat into the slow cooker</li>
                <li>Cover with vegetables</li>
                <li>Add nature's seasoning</li>
                <li>Let simmer on low for about  6 hours</li>
            </ol>
        </Container>
    )
}

export default PotRoastRecipeContainer;