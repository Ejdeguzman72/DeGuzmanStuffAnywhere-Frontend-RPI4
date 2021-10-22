import React from 'react';
import { Container } from 'react-bootstrap';

const CornedBeefRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Corned Beef Hash Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1 lb baking (russet) potatoes, peeled and cut into 1/4-inch dice</li>
                <li>1-lb piece cooked corned beef, cut into chunks</li>
                <li>beef, cut into chunks 1 cup chopped onion</li>
                <li>1 medium onion, chopped</li>
                <li>1 large red bell pepper, cut into 1/4-inch pieces</li>
                <li>2 tablespoons unsalted butter</li>
                <li>1/4 cup heavy cream</li>
                <li>4 large eggs (optional)</li>
                <li>1 tbsp chopped fresh flat-leaf parsley</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Cook potatoes in boiling salted water to cover until just tender, about 3 minutes, then drain. Pulse corned beef in a food processor until coarsely chopped.</li>
                <li>Sauté onion and bell pepper in butter in a 12-inch nonstick skillet over moderately high heat, stirring, until lightly browned, about 5 minutes. Add potatoes and sauté over moderately high heat, stirring occasionally, until browned, about 5 minutes.</li>
                <li>Stir in corned beef and salt and pepper to taste, then cook, stirring occasionally, until browned. Add cream and cook, stirring, 1 minute.</li>
                <li>If desired, make 4 holes in hash and break 1 egg into each. Cook over moderately low heat, covered, 5 minutes, or until eggs are cooked to desired doneness, and season with salt and pepper. Sprinkle hash with parsley.</li>
            </ol>
        </Container>
        </div>
    )
}

export default CornedBeefRecipeContainer;