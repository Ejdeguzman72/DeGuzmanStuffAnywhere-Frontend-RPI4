import React from 'react';
import { Container } from 'react-bootstrap';

const BreakfeastStrataRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Breakfeast Strata Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1 loaf (1 pound) herb or cheese bakery bread, cubed</li>
                <li>1 pound bulk pork sausage</li>
                <li>1 medium green pepper, chopped</li>
                <li>1 medium onion, chopped</li>
                <li>1 cup shredded cheddar cheese</li>
                <li>2 teaspoons grated fresh ginger</li>
                <li>6 large eggs</li>
                <li>2 cups 2% milk</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Place bread cubes in a greased 13x9-in. baking dish. In a large skillet, cook and crumble sausage with pepper and onion over medium-high heat until no longer pink, 5-7 minutes. With a slotted spoon, place sausage mixture over bread. Sprinkle with cheese.</li>
                <li>In a large bowl, whisk together eggs, mustard and milk; pour over top. Refrigerate, covered, overnight.</li>
                <li>Preheat oven to 350°. Remove strata from refrigerator while oven heats.</li>
                <li>Bake, uncovered, until a knife inserted in center comes out clean, 30-35 minutes. Let stand 5 minutes before cutting.</li>
            </ol>
        </Container>
        </div>
    )
}

export default BreakfeastStrataRecipeContainer;