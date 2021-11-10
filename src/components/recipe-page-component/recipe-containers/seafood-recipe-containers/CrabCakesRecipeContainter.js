import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const CrabCakesRecipeContainer = () => {
    return (
        <Container className="marinara-sauce-recipe-container">
            <h1 className="App">Crab Cakes Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1/2 cup mayonnaise</li>
                <li>1 large egg, beaten</li>
                <li>1 tablespoon Dijon mustard</li>
                <li>1 tablespoon Worcestershire sauce</li>
                <li>1/2 teaspoon hot sauce</li>
                <li>1 pound jumbo lump crab meat, picked over</li>
                <li>20 saltine crackers, finely crushed</li>
                <li>1/4 cup canola oil</li>
                <li>lemon wedges, for serving</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>In a small bowl, whisk the mayonnaise with the egg, mustard, Worcestershire sauce and hot sauce until smooth. </li>
                <li>In a medium bowl, lightly toss the crabmeat with the cracker crumbs. Gently fold in the mayonnaise mixture. Cover and refrigerate for at least 1 hour </li>
                <li>Scoop the crab mixture into eight 1/3‐cup mounds; lightly pack into 8 patties, about 1 1/2 inches thick. In a large skillet, heat the oil until shimmering. Add the crab cakes and cook over moderately high heat until deeply golden and heated through, about 3 minutes per side. Transfer the crab cakes to plates and serve with lemon wedges.</li>
            </ol>
        </Container>
    )
}

export default CrabCakesRecipeContainer;