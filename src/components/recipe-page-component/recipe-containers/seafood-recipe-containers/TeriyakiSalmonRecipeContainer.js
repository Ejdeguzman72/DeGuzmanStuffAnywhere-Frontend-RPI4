import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const TeriyakiSalmonRecipeContainer = () => {
    return (
        <Container className="marinara-sauce-recipe-container">
            <h1 className="App">Teriyaki Salmon Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>2 cups broccoli florets</li>
                <li>2 cups carrots, sliced</li>
                <li>2 tablespoons olive oil</li>
                <li>2 teaspoons Kosher salt</li>
                <li>2 teaspoons freshly ground black pepper</li>
                <li>2 boneless salmon fillets</li>
                <li>¾ cup packed brown sugar</li>
                <li>3 tablespoons soy sauce</li>
                <li>½ cup honey</li>
                <li>2 tablespoons sesame seeds</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Preheat oven to 400°F. </li>
                <li>On a baking sheet, combine broccoli, carrots, oil, salt, and pepper. Mix thoroughly </li>
                <li>Lay Salmon Filets on vegetables</li>
                <li>In a medium bowl, combine brown sugar, soy sauce, honey, and sesame seeds. 
                    Mix until there are no lumps. Spread the glaze evenly on top of the two salmon fillets.Bake for 12 minutes.</li>
                <li>Take the salmon fillets off the vegetables and set aside. Toss the vegetables in the roasting juices. Glaze the salmon with any remaining juices. Serve! </li>
            </ol>
        </Container>
    )
}

export default TeriyakiSalmonRecipeContainer;