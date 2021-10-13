import React from 'react';
import { Container } from 'react-bootstrap';

const BeefAndBroccoliRecipeContainer = () => {
    return (
        <div>
            <Container className="meatloaf-recipe-contianer">
            <h1 className="App">Beef And Broccoli Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>3 Tablespoons cornstarch, divided</li>
                <li>1 pound flank steak, cut into thin 1-inch pieces</li>
                <li>1/2 cup low sodium soy sauce</li>
                <li>3 Tablespoons packed light brown sugar</li>
                <li>1 Tablespoon minced garlic</li>
                <li>2 teaspoons grated fresh ginger</li>
                <li>2 Tablespoons vegetable oil, divided</li>
                <li>4 cups small broccoli florets</li>
                <li>1/2 cup sliced white onions</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>In a large bowl, whisk together 2 tablespoons cornstarch with 3 tablespoons water. Add the beef to the bowl and toss to combine.</li>
                <li>In a separate small bowl, whisk together the remaining 1 tablespoon cornstarch with the soy sauce, brown sugar, garlic and ginger. Set the sauce aside. </li>
                <li>Heat a large nonstick sauté pan over medium heat. Add 1 tablespoon of the vegetable oil and once it is hot, add the beef and cook, stirring constantly until the beef is almost cooked through. Using a slotted spoon, transfer the beef to a plate and set it aside.</li>
                <li>Add the remaining 1 tablespoon of vegetable oil to the pan and once it is hot, add the broccoli florets and sliced onions and cook, stirring occasionally, until the broccoli is tender, about 4 minutes. (See Kelly’s Notes.) </li>
                <li>Return the beef to the pan then add the prepared sauce. Bring the mixture to a boil and cook, stirring, for 1 minute or until the sauce thickens slightly. Serve with rice or noodles. </li>
            </ol>
        </Container>
        </div>
    )
}

export default BeefAndBroccoliRecipeContainer;