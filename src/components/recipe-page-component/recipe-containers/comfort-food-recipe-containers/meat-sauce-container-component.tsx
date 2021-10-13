import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css'

const MeatSauceContainer = () => {
    return (
        <Container className="meat-sauce-recipe-container"> 
            <h1 className="App">Meat Sauce Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1lb of ground beef</li>
                <li>Marinara Sauce</li>
                <li>Oil</li>
                <li>Nature's seasoning</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Add 1 lb of ground beef to the marinara sauce to make a meat sauce. Meat sauce allows the meat to go alot further than in making meatballs
                    to add the ground beef, take about a pound for the above amount of sauce and brown it first in a fry pan to remove the oil. Season with nature's 
                    seasoning. After meat is browned,  remove the liquid and spoon the meat into the sauce and then stir. 
                </li>
            </ol>
        </Container>
    )
}

export default MeatSauceContainer;