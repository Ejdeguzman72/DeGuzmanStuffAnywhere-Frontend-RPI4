import React from 'react';
import { Container } from 'react-bootstrap';

const CarrotCakeRecipeContainer = () => {
    return (
        <Container className="pecan-pie-recipe-container">
            <h1 className="App">Dad's Carrot Cake</h1>
            <h3>Ingredients - Cake</h3>
            <ul className="list">
                <li>2 C flaked coconut</li>
                <li>2 C sugar</li>
                <li>1 1/2 C veg.oil</li>
                <li>3 eggs</li>
                <li>2 tablespoon vanilla</li>
                <li>2 tablespoon of cinnamon</li>
                <li>3 eggs</li>
                <li>2 1/2 cups of All Purpose Flour</li>
                <li>2 tablespoon of baking soda</li>
                <li>1 teaspoon of salt</li>
                <li>2 cups of shredded carrots</li>
                <li>1 8-0z can drained pineapple</li>
                <li>1 cup of chopped walnuts (optional)</li>
            </ul>
            <h3>Ingredients - Cream Cheese Frosting</h3>
            <ul className="list">
                <li>8 oz softened cream cheese</li>
                <li>6 teaspoons of softened sweet butter</li>
                <li>3 cups of confectioners sugar</li>
                <li>t teaspoon of vanilla</li>
                <li>1 teaspoon lemon juice</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Combine sugar, oil, eggs, and vanilla in a large bowl. Blend with a wooden spoon</li>
                <li>Stir in flour, cinnamon, soda, salt and mix</li>
                <li>Fold in carrots, cocnut, pineapple, and nuts</li>
                <li>Pour into a prepared pan. Bake until tester inserted in center comes out clean (50 minutes)</li>
                <li>Let it cool in pan approx 5 minutes. Invert on rack and cool</li>
                <li>Cream together slowly for the cream cheese icing. Beat in vanilla and lemon juice</li>
            </ol>
            <br></br>
        </Container>
    )
}

export default CarrotCakeRecipeContainer;