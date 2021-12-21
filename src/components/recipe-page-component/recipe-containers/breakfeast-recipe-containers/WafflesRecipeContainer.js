import React from 'react';
import { Container } from 'react-bootstrap';

const WafflesRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Waffles Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1 3/4 cups milk</li>
                <li>2 eggs </li>
                <li>2 cups all-purpose flour</li>
                <li>1/4 cup granulated sugar</li>
                <li>1/4 tsp salt </li>
                <li>1/2 cup of vegetable oil</li>
                <li>4 Tbsp baking powder </li>
                <li>2 Tbsp melted butter</li>
                <li>1 tbsp of vanilla extract</li>
                <li>2 1/2 tbsp of ground cinnamon</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Whisk flour, white sugar, brown sugar, cinnamon, baking powder, and salt together in a bowl until no lumps remain.</li>
                <li>Pour milk, vegetable oil, and vanilla extract into the flour mixture; stir until just combined.</li>
                <li>Beat egg whites until foamy in a large glass or metal mixing bowl until soft peaks form. Lift your beater or whisk straight up: the egg whites will form soft mounds rather than a sharp peak.</li>
                <li>Fold the the beaten egg whites into the batter.</li>
                <li>Preheat a waffle iron and coat with cooking spray.</li>
                <li>Pour batter onto waffle iron in batches and cook until crisp and golden brown, about 2 minutes; repeat until all batter is used.</li>
            </ol>
        </Container>
        </div>
    )
}

export default WafflesRecipeContainer;