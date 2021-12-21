import React from 'react';
import { Container } from 'react-bootstrap';

const HoneyGarlicPorkRecipeContainer = () => {
    return (
        <Container className="meatloaf-recipe-container">
            <h1 className="App">Honey Garlic Pork</h1>
            <h3>Ingredients - Pork</h3>
            <ul className="list">
                <li>2 pork tenderloins</li>
                <li>1 1/2 tbsp olive oil</li>
                <li>3 garlic cloves</li>
            </ul>
            <h3>Ingredients - Pork Rub</h3>
            <ul className="list">
                <li>1/2 tsp garlic powder</li>
                <li>1/2 tsp paprika</li>
                <li>1/2 tsp salt</li>
                <li>1/2 tsp black pepper</li>
            </ul>
            <h3>Ingredients - Honey Garlic Sauce</h3>
            <ul className="list">
                <li>3 tbsp cider vinegar</li>
                <li>1 1/2 tbsp soy sauce</li>
                <li>1/2 cup of honey</li>
            </ul>
            <br></br>
            <h3>Instructions</h3>
            <ol className="list">
                <li>Preheat oven to 350 degrees Fahrenheit</li>
                <li>Mix sauce ingredients together</li>
                <li>Mix rub ingredients and sprinkle over pork</li>
                <li>Heat oil in a large oven proff skillet over high heat. Add pork and sear until golden</li>
                <li>pour sauce in, turn pork once and then immediately transfer to oven</li>
                <li>Roast 15-18 minutes </li>
                <li>Place skillet with sauce on stove over medium high heat, simmer rapidly for 3 minutes until liquid reduces down to thin syrup</li>
            </ol>
            <br></br>
        </Container>
    )
}

export default HoneyGarlicPorkRecipeContainer;