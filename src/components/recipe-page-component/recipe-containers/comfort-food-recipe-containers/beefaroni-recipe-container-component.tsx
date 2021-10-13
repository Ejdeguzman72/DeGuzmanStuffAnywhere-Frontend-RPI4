import React from 'react';
import { Container } from 'react-bootstrap';

const BeefaroniRecipeContainer = () => {
    return (
        <Container className="beefaroni-recipe-container">
            <h1 className="App">Beefaroni</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>Marinara Sauce</li>
                <li>Meat</li>
                <li>Macaroni</li>
            </ul>
            <h3>Directions</h3>
            <p>make the marinara sauce and add the meat as described above.  
                Let it simmer while you cook the macaroni.  
                After macaroni is cooked, drain and rinse with cold water.  
                Put the macaroni in a 9x12 pan.  Pour the meat sauce mixture over the macaroni, 
                sprinkle with parmesan cheese and then place slices of mozzarella cheese on top to cover the mix.  
                Bake at 350 until the cheese is melted.  
            </p>
        </Container>
    )
}

export default BeefaroniRecipeContainer;