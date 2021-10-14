import React from 'react';
import { Container } from 'react-bootstrap';

const SinigangRecipeContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Sinigang</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Pork</li>
                <li>Onion</li>
                <li>Tomato</li>
                <li>Lemons (about 4 - 5</li>
                <li>Okra (box of frozen whole)</li>
                <li>Eggplant</li>
                <li>Green beans (about 1/4 pound)</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Cover pork with water in pot</li>
                <li>Add salt</li>
                <li>Peel onion and cut into quarters and place into pot</li>
                <li>Chop tomato and place in pot.</li>
                <li>Cut lemons in half and squeeze lemon into pot. (strain so you don’t add seeds)</li>
                <li>Let boil about 40 minutes</li>
                <li>Meanwhile clean beans by cutting ends</li>
                <li>Cut eggplant into 8</li>
                <li>Add beans, okra and eggplant. Let boil for about 15 minutes.</li>
            </ol>
        </Container>
    )
}

export default SinigangRecipeContainer;