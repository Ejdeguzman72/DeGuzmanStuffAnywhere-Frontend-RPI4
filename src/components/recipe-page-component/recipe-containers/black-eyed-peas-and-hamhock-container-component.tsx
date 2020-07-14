import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../style-sheets/recipe-styles.css';

const BlacyEyedPeasAndHamHockContainer = () => {
    return (
        <Container className="black-eyed-peas-and-hamhocks-container">
            <h1>Black Eyed Peas and Ham Hocks</h1>
            <p>Ingredients</p>
            <ul>
                <li>Smoked Ham Hocks</li>
                <li>Onions</li>
                <li>Black eyed peas</li>
            </ul>
            <p>Directions</p>
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