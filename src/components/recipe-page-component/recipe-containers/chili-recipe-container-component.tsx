import React from 'react';
import { Container } from 'react-bootstrap';

const ChiliRecipeContainer = () => {
    return (
        <Container className="chili-recipe-container">
            <h1>Chili Recipe</h1>
            <p>Ingredients</p>
            <ul>
                <li>Garlic</li>
                <li>Onion</li>
                <li>Ground beef</li>
                <li>Nature's seasoning</li>
                <li>Chili powder</li>
                <li>Red pepper flakes</li>
                <li>Crushed Cayenne Pepper</li>
                <li>Can crushed tomatoes</li>
                <li>2-3 cans of dark red kidney beans</li>
            </ul>
            <p>Directions</p>
            <ul>
                <li>Mince garlic</li>
                <li>Chop onion</li>
                <li>In pot, place a little of oil and saute garlic and onion</li>
                <li>Put in ground beef, and allow to brown. Mix frequently to break up the champs of the ground beef</li>
                <li>Drain off some of the liquid</li>
                <li>Add in nature's seasoning,  chili powder, red pepper flakes, and crushed cayenne pepper to taste.</li>
                <li>Drain the liquid from the cans of kidney beans and then add beans only to the pot</li>
                <li>Stir in the crushed tomatoes</li>
                <li>3/4 fill the crushed tomatoes can with water and swirl. Add to pot and stir to mix</li>
                <li>Allow to simmer. Can eat as is or served with rice</li>
            </ul>
        </Container>
    )
}

export default ChiliRecipeContainer;