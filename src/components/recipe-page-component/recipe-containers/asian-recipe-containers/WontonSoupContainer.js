import React from 'react';
import { Container } from 'react-bootstrap';

const WontonSoupRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Wonton Soup Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>8 cups low sodium chicken broth</li>
                <li>¼ cup low sodium soy sauce</li>
                <li>3 tbsp rice vinegar</li>
                <li>1 tbsp fresh ginger, minced</li>
                <li>1 tbsp sesame oil</li>
                <li>1/2 tbsp sambal oelek</li>
                <li>A bunch of potstickers</li>
                <li>8oz mushrooms, sliced</li>
                <li>6oz raw baby spinach</li>
                <li>rice noodles, 1 package (whatever you want, I don't care)</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>In a large pot over high heat, bring chicken broth, soy sauce, rice vinegar, ginger, sesame oil and sambal oelek to a boil, stirring occasionally.</li>
                <li>One boiling, add frozen dumplings/potstickers, mushrooms, and baby spinach to the boiling broth and simmer for 35 minutes until dumplings are warmed through and spinach is wilted and mushrooms are tender.</li>
                <li>Divide noodles between four bowls and cover with equal parts of the wonton soup.</li>
            </ol>
        </Container>
        </div>
    )
}

export default WontonSoupRecipeContainer;