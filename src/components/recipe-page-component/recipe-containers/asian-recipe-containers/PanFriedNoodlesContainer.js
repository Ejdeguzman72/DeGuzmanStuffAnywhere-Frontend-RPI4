import React from 'react';
import { Container } from 'react-bootstrap';

const PanFriedNoodlesContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Pan Fried Noodles Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1 ½ cup shredded carrots</li>
                <li>1 ½ cup bean sprouts</li>
                <li>1 cup green onions</li>
                <li>16 oz Yakisoba noodles</li>
                <li>1 tbsp canola oil</li>
                <li>2 tbsp sesame oil</li>
                <li>⅓ cup low sodium soy sauce</li>
                <li>1 tbsp hoisin sauce</li>
                <li>4 garlic cloves</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Preheat a skillet on high heat with canola oil. Add shredded carrot to the skillet and cook until the carrots soften. Remove from skillet and set aside.</li>
                <li>Add sesame oil to the same skillet and fry noodles until they get crispy edges. Add carrots back to the noodles and add in the chopped green onions.</li>
                <li>To create the sauce, combine soy sauce together with hoisin sauce and pressed garlic. Add the sauce mixture to the cooking ingredients.</li>
                <li>After a few minutes, add bean sprouts and stir to combine everything together. Remove from the heat and serve while everything is still warm.</li>
            </ol>
        </Container>
        </div>
    )
}

export default PanFriedNoodlesContainer;