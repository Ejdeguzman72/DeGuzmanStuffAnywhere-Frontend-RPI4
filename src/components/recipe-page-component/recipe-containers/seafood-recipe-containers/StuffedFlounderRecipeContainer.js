import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const StuffedFlounderRecipeContainer = () => {
    return (
        <Container className="marinara-sauce-recipe-container">
            <h1 className="App">Marinara Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>6 filets Flounder or Fluke</li>
                <li>1/4 cup mayo</li>
                <li>1 egg</li>
                <li>1/2 cup bread crumbs</li>
                <li>1 can lump crab meat</li>
                <li>1 can tiny shrimp</li>
                <li>1 tsp old bay</li>
                <li>salt and pepper</li>
                <li>1 lemon</li>
                <li>4 tablespoon butter</li>
                <li>paprika and parsley for garnish</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>In a bowl, mix together all ingredients, except fish, crab, shrimp and bread crumbs. </li>
                <li>In a separate bowl, add crab and shrimp. Coat with bread crumbs. </li>
                <li>Add in mayo mixture. Add in juice of 1/2 lemon. Mix in parsley.</li>
                <li>Butter a casserole dish. Preheat oven to 350 degrees.</li>
                <li>Lay the fish flat and add a scoop about a tablespoon size in the center. </li>
                <li>Roll fish up and lay seam side down in the casserole dish. </li>
                <li>In a small bowl, melt 4 tbsp butter. Mix in juice of remaining lemon.</li>
                <li>When finished with all fish fillets, brush with melted lemon butter mixture and garnish with paprika. </li>
                <li>Bake your Crab Stuffed Flounder for 15-20 minutes until the fish is white and flakey.</li>
            </ol>
        </Container>
    )
}

export default StuffedFlounderRecipeContainer;