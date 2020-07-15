import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../style-sheets/recipe-styles.css';

const FajitasRecipeContainer = () => {
    return (
        <Container  className="fajitas-recipe-container">
            <h1 className="App">Fajitas Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Beef/Chicken</li>
                <li>Two large onions</li>
                <li>Two large green peppers</li>
                <li>One large red pepper</li>
                <li>One large yellow pepper</li>
                <li>Limes, lots of limes</li>
                <li>Nature's Seasoning</li>
                <li>Crushed red pepper flakes</li>
                <li>Tortillas</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Slice meat into thin strips</li>
                <li>Sprinkle some crushed red pepper flakes on top of the meat</li>
                <li>Squeeze limes over the meat (make sure you drain out the seeds)</li>
                <li>Mix well and allow to marinate for about an hour (overnight is best)</li>
                <li>Slice the onions and peppers</li>
                <li>In a little oil, saute the onions and peppers together for a couple of minutes</li>
                <li>Remove from pan</li>
                <li>Place pan back on stove and place the strips of meat into the pan to cook</li>
                <li>When all the meat is cooked, add in the onions and peppers</li>
                <li>Add some nature's seasoning and stir for a minute or two to combine the flavors</li>
                <li>Place in tortillas</li>
            </ol>
        </Container>
    )
}

export default FajitasRecipeContainer;