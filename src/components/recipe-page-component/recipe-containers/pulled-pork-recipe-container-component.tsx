import React from 'react';
import { Container } from 'react-bootstrap';

const PulledPorkRecipeContainer = () => {
    return (
        <Container className="pulled-pork-recipe-container">
            <h1 className="App">Pulled Pork Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Boston Butt</li>
                <li>Pork rub</li>
                <li>BBQ Sauce</li>
                <li>Buns</li>
            </ul>
            <br></br>
            <h3>Directions</h3>
            <ol>
                <li>Apply generous amount of rub onto butt</li>
                <li>Place butt into slow cooker</li>
                <li>Set on  low and allow to sit for 6to 8 hours</li>
                <li>Take butt out of slow cooker and place into a pan</li>
                <li>Using forks, shred the meat off of the bone</li>
                <li>Add BBQ sauce</li>
            </ol>
        </Container>
    )
}

export default PulledPorkRecipeContainer;