import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const ChickenMarsalaRecipeContainer = () => {
    return (
        <Container className="marinara-sauce-recipe-container">
            <h1 className="App">Chicken Marsala Recipe</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1-1/2 pounds boneless skinless chicken breasts, pounded ¼-inch thick (see note), or chicken tenderloins</li>
                <li>3 tablespoons all-purpose flour</li>
                <li>Salt</li>
                <li>Freshly ground black pepper</li>
                <li>1 tablespoon olive oil</li>
                <li>3 tablespoons unsalted butter, divided</li>
                <li>1 (8-oz) package pre-sliced bella or button mushrooms</li>
                <li>3 tablespoons finely chopped shallots, from 1 medium shallot</li>
                <li>2 cloves garlic, minced</li>
                <li>2/3 cup chicken broth</li>
                <li>2/3 cup dry Marsala wine</li>
                <li>2/3 cup heavy cream</li>
                <li>2 teaspoons chopped fresh thyme</li>
                <li>2 tablespoons chopped fresh Italian parsley, for serving (optional)</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Place the flour, 3/4 teaspoon salt, and 1/4 teaspoon pepper in a ziplock bag. Add the chicken to the bag; seal bag tightly and shake to coat chicken evenly. Set aside.</li>
                <li>Heat the oil and 2 tablespoons of the butter in a large skillet over medium-high heat. </li>
                <li>Place the flour-dusted chicken in the pan, shaking off any excess first, and cook, turning once, until the chicken is golden and just barely cooked through, about 5 to 6 minutes total.</li>
                <li>Transfer the chicken to a plate and set aside.</li>
                <li>Melt the remaining tablespoon of butter in the pan. Add the mushrooms and cook, stirring frequently, until the mushrooms begin to brown, 3 to 4 minutes. Add the shallots, garlic, and 1/4 teaspoon of salt; cook for 1 to 2 minutes more.</li>
                <li>Add the broth, Marsala, heavy cream, thyme, 1/4 teaspoon salt, and 1/8 teaspoon of pepper; use a wooden spoon to scrape any brown bits from the pan into the liquid. </li>
                <li>Bring the liquid to a boil, then reduce the heat to medium and gently boil, uncovered, until the sauce is reduced by about half, slightly thickened, and darkened in color, 10 to 15 minutes (you’re going for a thin cream sauce; it won’t start to thicken until the very end of the cooking time)</li>
                <li>Add the chicken back to the pan, along with any juices that accumulated on the plate. Reduce the heat to low and simmer until the chicken is warmed through and the sauce thickens a bit more, 2 to 3 minutes.</li>
                <li>Sprinkle with parsley, if using, and serve.</li>
            </ol>
        </Container>
    )
}

export default ChickenMarsalaRecipeContainer;