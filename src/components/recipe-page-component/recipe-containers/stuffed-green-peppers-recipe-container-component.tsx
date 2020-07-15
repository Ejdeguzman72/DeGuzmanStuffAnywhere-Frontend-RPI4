import React from 'react';
import { Container } from 'react-bootstrap';

const StuffedGreenPeppersRecipeContainer = () => {
    return (
        <Container className="stuffed-green-peppers-recipe-container">
            <h1 className="App">Stuffed Green Peppers Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Ground beef</li>
                <li>Green peppers</li>
                <li>Onion</li>
                <li>Cooked rice</li>
                <li>2 eggs</li>
                <li>Nature's seasoning</li>
                <li>Can of crushed tomatoes</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Chop onion</li>
                <li>Cut tops off the green peppers</li>
                <li>Chop the tops of the green peppers</li>
                <li>In bowl, mix ground beef, 3/4 chopped onion, 3/4  choppedpepper, eggs and rice</li>
                <li>Add some nature's seasoning and mix well</li>
                <li>Fill green pepper  bottoms with  mixture. Do not pack tightly</li>
                <li>Place stuffed peppers into slow cooker</li>
                <li>Add remainder chopped onion and chopped pepper</li>
                <li>Add crsuhed tomato</li>
                <li>3/4 fill empty crushed tomato can with water and swirl to get the rest of the crushed tomato. Add to slow cooker</li>
                <li>Add nature's seasoning</li>
                <li>Set on low and allow to simmer 4-6 hours.  On high simmer for  about 3 hours</li>
            </ol>
        </Container>
    )
}

export default StuffedGreenPeppersRecipeContainer;