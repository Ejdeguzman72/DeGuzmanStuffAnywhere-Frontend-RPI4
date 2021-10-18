import React from 'react';
import { Container } from 'react-bootstrap';

const FrenchToastRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Buttermilk French Toast Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1 1/2 cups well-shaken buttermilk</li>
                <li>4 large eggs</li>
                <li>3 tablespoons sugar</li>
                <li>1 medium onion, chopped</li>
                <li>1/4 teaspoon salt</li>
                <li>12 (1/2-inch-thick) slices challah (from a 1-pound loaf; not end slices)</li>
                <li>4 1/2 tablespoons unsalted butter, divided</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Preheat oven to 200°F.</li>
                <li>Whisk together buttermilk, eggs, sugar, and salt in a bowl. Pour into a large 4-sided sheet pan, then add bread in 1 layer and soak, turning occasionally, until bread has absorbed all liquid but is not falling apart, about 20 minutes.</li>
                <li>Heat 1 1/2 tablespoon butter in a 12-inch nonstick skillet over medium-high heat until foam subsides. Transfer 4 bread slices with a slotted spatula to skillet and cook, turning once, until slightly puffed and golden brown, about 3 minutes total.</li>
                <li>Transfer to a large shallow baking pan and keep warm in oven. Cook remaining bread in 2 batches, adding 1 1/2 tablespoon butter between batches.</li>
            </ol>
        </Container>
        </div>
    )
}

export default FrenchToastRecipeContainer;