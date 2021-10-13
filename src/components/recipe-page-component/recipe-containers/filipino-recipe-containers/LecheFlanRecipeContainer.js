import React from 'react';
import { Container } from 'react-bootstrap';

const LecheFlanRecipeContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Adobo</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Sugar</li>
                <li>10 eggs</li>
                <li>limes</li>
                <li>Condensed Milk</li>
                <li>Evaporated Milk</li>
                <li>Cream</li>
                <li>Water</li>
                <li>caramel</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Preheat oven to 350 degrees Fahrenheit</li>
                <li>Fill small pan with sugar and continuously stir until caramelized</li>
                <li>Crack 10 eggs and use yolk only</li>
                <li>Add lime zest</li>
                <li>Use stand mixer on low setting</li>
                <li>Mix condensed milk and evaporated milk</li>
                <li>mix cream and use evaporated milk can and fill to 3 / 4th can</li>
                <li>get pan and put water enough to place flan mixture</li>
                <li>cook 45 minutes to an hour</li>
            </ol>
        </Container>
    )
}

export default LecheFlanRecipeContainer;