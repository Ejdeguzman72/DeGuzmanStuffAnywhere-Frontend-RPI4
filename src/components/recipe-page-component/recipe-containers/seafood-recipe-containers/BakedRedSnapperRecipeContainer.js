import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const BakedRedSnapperRecipeContainer = () => {
    return (
        <Container className="marinara-sauce-recipe-container">
            <h1 className="App">Baked Red Snapper Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>2 lb. dressed whole red snapper</li>
                <li>1 teaspoon salt</li>
                <li>3 tablespoon fresh lemon juice</li>
                <li>3 tablespoon chopped fresh oregano</li>
                <li>1/4 tbsp black pepper</li>
                <li>1 tbsp olive oil</li>
                <li>lemon slices</li>
                <li>sprigs of oregano</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Preheat oven to 350'F. Sprinkle fish with sea salt. </li>
                <li>Score fish by making 3 diagonal cuts about 1 inch apart and '/, inch deep into thickestpart of fish. </li>
                <li>Combine lemon juice, oregano and black pepper in a small bowl. Press mixtureinto slits.</li>
                <li>Place fish in a shallow baking pan. Brush top of fish with olive oil</li>
                <li>Bake fish for l0 minutes per inch of thickness or until fish flakes easily when tested with afork (!a5'F). Serve garnished with lemon slicesand sprigs of oregano, if desired </li>
            </ol>
        </Container>
    )
}

export default BakedRedSnapperRecipeContainer;