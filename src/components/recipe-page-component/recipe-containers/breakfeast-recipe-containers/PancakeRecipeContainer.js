import React from 'react';
import { Container } from 'react-bootstrap';

const PancakeRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Pancake Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1.5 (386g) cups milk </li>
                <li>1 egg </li>
                <li>2 cups (300g) all-purpose flour </li>
                <li>1/4 cup (62g) granulated sugar</li>
                <li>1 tsp (4g) salt </li>
                <li>1/4 tsp (1g) baking soda </li>
                <li>1 Tbsp (12g) baking powder </li>
                <li>2 (21g) Tbsp melted butter</li>
                <li>2 tbsp of vanilla extract</li>
                <li>1 tbsp of ground cinnamon</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>In a small bowl, whisk together egg and milk.</li>
                <li>In a separate bowl, whisk and combine all-purpose flour with granulated sugar, salt, baking soda, and baking powder.</li>
                <li>Mix the dry ingredients with the wet ingredients while constantly whisking. </li>
                <li>While whisking add in melted unsalted butter. Whisk until combined. Rest for 5 minutes.</li>
                <li>Preheat a nonstick skillet over medium. Spray with spray oil or unsalted butter.</li>
                <li>Once hot spoon ¼” dollops of the pancake batter. Cook for 2-3 minutes or until golden brown on the bottom. </li>
                <li>Flip and cook for an additional 2-3 minutes. Repeat with the rest of the batter. </li>
                <li>Top with butter and drizzle with maple syrup to serve.</li>
            </ol>
        </Container>
        </div>
    )
}

export default PancakeRecipeContainer;