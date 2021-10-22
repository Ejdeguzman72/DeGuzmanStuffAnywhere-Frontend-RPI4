import React from 'react';
import { Container } from 'react-bootstrap';

const LumpiaRecipeContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Lumpia (Spring Rolls)</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1 lb of ground pork</li>
                <li>2 cloves of crushed garlic</li>
                <li>1/2 cup of chopped onion</li>
                <li>1/2 cup of minced carrots</li>
                <li>1/2 cup of green onions</li>
                <li>1 tsp of ground black pepper</li>
                <li>1 teaspoon of salt</li>
                <li>1 teaspoon garlic powder</li>
                <li>1 teaspoon soy sauce</li>
                <li>lumpia wrappers</li>
                <li>vegetable oil for frying</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Place a wok or large skillet over high heat, and pour in 1 tablespoon vegetable oil. Cook pork, stirring frequently, until no pink is showing. Remove pork from pan and set aside.</li>
                <li>Drain grease from pan, leaving a thin coating. Cook garlic and onion in the same pan for 2 minutes. Stir in the cooked pork, carrots, green onions, and cabbage. Season with pepper, salt, garlic powder, and soy sauce. Remove from heat, and set aside until cool enough to handle.</li>
                <li>Place three heaping tablespoons of the filling diagonally near one corner of each wrapper, leaving a 1 1/2 inch space at both ends. Fold the side along the length of the filling over the filling, tuck in both ends, and roll neatly.</li>
                <li>Keep the roll tight as you assemble. Moisten the other side of the wrapper with water to seal the edge. Cover the rolls with plastic wrap to retain moisture.</li>
                <li>Heat a heavy skillet over medium heat, add oil to 1/2 inch depth, and heat for 5 minutes. Slide 3 or 4 lumpia into the oil. Fry the rolls for 1 to 2 minutes, until all sides are golden brown. Drain on paper towels. Serve immediately.</li>
            </ol>
        </Container>
    )
}

export default LumpiaRecipeContainer;