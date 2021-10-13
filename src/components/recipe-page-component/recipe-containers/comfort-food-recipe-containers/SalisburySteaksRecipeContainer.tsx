import React from 'react';
import { Container } from 'react-bootstrap';

const SalisburySteaksRecipeContainer = () => {
    return (
        <Container className="salisbury-steaks-recipe-container">
            <h1 className="App">Salisbury Steaks</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Ground Beef</li>
                <li>Mushrooms</li>
                <li>Onion</li>
                <li>Brown gravy mix</li>
                <li>Nature's Seasoning</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>In mixing bowl, mix ground beef and nature's seasoning</li>
                <li>Make meat patties</li>
                <li>Place meat patties in frypan and brown sides</li>
                <li>After browning first side, place choppedonions into pan while browning the second side</li>
                <li>Slice mushrooms</li>
                <li>Place brown gravy mix in cup, add water and mix</li>
                <li>Place mushrooms on top</li>
                <li>Add some nature's seasoning and cover</li>
                <li>Allow to simmer</li>
            </ol>
        </Container>
    )
}

export default SalisburySteaksRecipeContainer;