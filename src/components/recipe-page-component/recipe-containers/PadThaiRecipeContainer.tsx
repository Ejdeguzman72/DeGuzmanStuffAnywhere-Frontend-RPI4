import React from 'react';
import { Container } from 'react-bootstrap';

const PadThaiRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Pad Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Large package of chicken/beef</li>
                <li>Shrimp</li>
                <li>package of savory tofu</li>
                <li>3 eggs</li>
                <li>egg noodles</li>
                <li>Nature's seasoning</li>
                <li>Liquid Tamarin</li>
                <li>green onions</li>
                <li>onion sprouts</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Chop onion</li>
                <li>Chop green pepper</li>
                <li>In mixing bowl place ground beef, half of the chopped onion, half of the chopped green pepper, 2 eggs, nature’s seasoning and mix well</li>
                <li>Divide mixture in half and form loaf. Repeat with other half</li>
                <li>Place in fry pan and brown all sides</li>
                <li>When browning last side, add onions to pan to cook</li>
                <li>Add green  pepper and allow to cook for about a minute or two.</li>
                <li>Pour crushed tomatoes over loaves</li>
                <li>3/4  fill empty can with water, swirl and pour intofry pan</li>
                <li>Let simmer for about 45 minutes</li>
            </ol>
        </Container>
        </div>
    )
}