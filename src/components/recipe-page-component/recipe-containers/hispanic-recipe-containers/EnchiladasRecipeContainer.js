import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const EnchiladasRecipeContainer = () => {
    return (
        <Container  className="fajitas-recipe-container">
            <h1 className="App">Enchiladas Recipe</h1>
            <h3>Ingredients - Enchiladas</h3>
            <ul className="list">
                <li>Beef/Chicken</li>
                <li>Onion and diced green chiles</li>
                <li>black/pinto beans</li>
                <li>Tortillas</li>
                <li>Cheese</li>
                <li>Fresh Cilantro</li>
                <li>sliced avocado</li>
                <li>sour cream</li>
            </ul>
            <h3>Ingredients - Sauce</h3>
            <ul className="list">
                <li>Oil and flour</li>
                <li>Chili Powder</li>
                <li>garlic powder, ground cumin, and dried oregano</li>
                <li>Chicken/Vegetable stock</li>
                <li>Salt</li>
            </ul>
            <h3>Directions - Sauce</h3>
            <ol>
                <li>Cook the roux and spices: In a small saucepan, we’ll first cook the flour and oil together to form the roux, and then whisk in the spices to briefly toast them in the saucepan before adding in the stock.</li>
                <li>Simmer: Gradually add in the stock while whisking the sauce, in order to blend in any lumps. Then bring the sauce to a simmer and let it cook (you want to maintain a low bubble) for 10-15 minutes, or until it has reduced to your desired thickness.</li>
                <li>Season: Season with salt (or any extra seasonings that you might like to add) to taste.</li>
                <li>Serve: Then serve it up in a pan of enchiladas or whatever recipe sounds good…and enjoy!</li>
            </ol>
            <h3>Directions - Enchiladas</h3>
            <ol className="list">
                <li>Prep oven and enchilada sauce. Preheat oven to 350°F.  Prepare your enchilada sauce.</li>
                <li>Sauté the filling mixture. In large sauté pan, heat oil over medium-high heat. 
                    Add onion and sauté for 3 minutes, stirring occasionally. 
                    Add diced chicken and green chiles, and season with a generous pinch of salt and pepper. 
                    Sauté the mixture for 6-8 minutes, stirring occasionally, or until the chicken is cooked through.
                    Add in the beans and stir until evenly combined.  
                    Remove pan from heat and set aside.</li>
                <li>Assemble the enchiladas. To assemble the enchiladas, set up an assembly line including: tortillas, enchilada sauce, chicken mixture, and cheese. 
                    Lay out a tortilla, and spread two tablespoons of sauce over the surface of the tortilla.  
                    Add a generous spoonful of the chicken mixture in a line down the center of the tortilla, then sprinkle with 1/3 cup cheese. 
                    Roll up tortilla and place in a greased 9 x 13-inch baking dish. Assemble the remaining enchiladas.  
                    Then spread any remaining sauce evenly over the top of the enchiladas, followed by any extra cheese.</li>
                <li>Bake. Bake uncovered for 20 minutes, until the enchiladas are cooked through and the tortillas are slightly crispy on the outside.  Transfer the baking dish to a wire baking rack.</li>
                <li>Serve. Serve the enchiladas immediately while they’re nice and hot and melty, garnished with lots of fresh toppings. Enjoy!</li>
            </ol>
        </Container>
    )
}

export default EnchiladasRecipeContainer;