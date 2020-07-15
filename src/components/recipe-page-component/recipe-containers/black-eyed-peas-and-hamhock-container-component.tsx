import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../style-sheets/recipe-styles.css';

const BlacyEyedPeasAndHamHockContainer = () => {
    return (
        <Container className="black-eyed-peas-and-hamhocks-container">
            <h1 className="App">Black Eyed Peas and Ham Hocks</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Smoked Ham Hocks</li>
                <li>Onions</li>
                <li>Black eyed peas</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Rinse off the smoked ham hocks and place them in the slow cooker</li>
                <li>Cut onion into quarters and place in the slow cooker</li>
                <li>Rinse peas and place them into slow cooker</li>
                <li>add enough water to cover ham hocks</li>
                <li>add half teaspoon of salt</li>
            </ol>
        </Container>
    )
}

export default BlacyEyedPeasAndHamHockContainer;