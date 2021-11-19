import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const ChilaquilesRecipeContainer = () => {
    return (
        <Container  className="fajitas-recipe-container">
            <h1 className="App">Chilaquiles Con Salsa Roja Recipe</h1>
            <h3>Ingredients - Tortilla Chips</h3>
            <ul className="list">
                <li>1/4 cup vegetable oil, for frying</li>
                <li>12 corn tortillas, cut into 8 wedges each</li>
                <li>Kosher salt</li>
            </ul>
            <h3>Ingredients - Salsa Roja</h3>
            <ul className="list">
                <li>4 Roma tomatoes or 2 large tomatoes (about 1 1/2 pounds), chopped</li>
                <li>1/2 large yellow onion, chopped</li>
                <li>1 medium jalapeño, sliced (remove the seeds for a less spicy dish)</li>
                <li>2 cloves of garlic</li>
                <li>1 1/4 cups low-sodium chicken or vegetable broth, divided</li>
                <li>2 teaspoons vegetable oil</li>
                <li>Kosher salt</li>
            </ul>
            <h3>To Serve With</h3>
            <ul className="list">
                <li>Avocado/guacamole</li>
                <li>Crema</li>
                <li>Queso Frescro</li>
                <li>Fried Eggs</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Fry the tortillas. Heat 1/4 cup oil in a large skillet over medium-high heat until shimmering. Add about a quarter of the tortilla wedges and cook, flipping once, until lightly brown and crisp.</li>
                <li>Drain the tortilla chips. Drain the freshly fried tortilla chips on a paper towel-lined baking sheet. Sprinkle lightly with salt. Repeat this process until all tortillas are fried, adding more oil if needed.</li>
                <li>Make the salsa roja. Place the tomatoes, onion, jalapeño, and garlic in a blender or food processor fitted with the blade attachment. Pour in 1 cup of the broth. Blend until smooth.</li>
                <li>Cook the salsa. Heat 2 teaspoons oil in a large skillet over medium-high heat until shimmering. Add the salsa and cook, stirring occasionally, until slightly thickened, 5 to 10 minutes (the consistency of the salsa will vary depending on the size and juiciness of the tomatoes). Add additional broth to thin out the salsa, if needed. Taste and season with salt as needed.</li>
                <li>Coat the chips with the salsa. Add the tortilla chips and stir carefully to coat the chips. Cook until the tortillas are heated through, about 3 minutes. Taste and season with salt as needed.</li>
                <li>Serve warm. Serve warm garnished with avocado or guacamole, crema, queso fresco, and/or fried eggs, if desired.</li>
            </ol>
        </Container>
    )
}

export default ChilaquilesRecipeContainer;