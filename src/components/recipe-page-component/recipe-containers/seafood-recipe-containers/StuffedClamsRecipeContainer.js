import React from 'react';
import { Container } from 'react-bootstrap';
import '../../../../style-sheets/recipe-styles.css';

const StuffedClamsRecipeContainer = () => {
    return (
        <Container className="marinara-sauce-recipe-container">
            <h1 className="App">Baked Stuffed Clams Recipe</h1>
            <h3>Ingredients - Clams</h3>
            <ul className="list">
                <li>2 tablespoons olive oil</li>
                <li>1 small red onion, coarsely chopped</li>
                <li>5 garlic cloves, crushed</li>
                <li>1 cup dry white wine</li>
                <li>16 littleneck or cherrystone clams (each about 3 inches wide), scrubbed</li>
                <li>Seaweed, for serving (optional)</li>
            </ul>
            <h3>Ingredients - Herbed Breadcrumb Stuffing</h3>
            <ul>
                <li>2 tbsps of extra-virgin olive oil</li>
                <li>1/3 medium white onion, minced</li>
                <li>2 garlic cloves, minced</li>
                <li>1/2 cup of almond flour (or finely ground blanched almonds)</li>
                <li>1 cup fine fresh breadcrumbs</li>
                <li>1/2 cup cup finely chopped fresh flat-leaf parsley</li>
                <li>1 tbsp finely chopped fresh dill</li>
                <li>1 tsp of chopped fresh thyme</li>
                <li>1/2 teaspoon finely chopped rosemary</li>
                <li>4 tbsp unsalted butter, softened</li>
                <li>salt and pepper to taste</li>
                <li>4 to 6 tbsps of clam broth</li>
            </ul>
            <h3>Directions - Stuffed Clams</h3>
            <ol>
                <li>Heat olive oil in a pot over medium high. Cook onion until softened but not browned, stirring occasionally, about 5 minutes. Add garlic, and saute, stirring, just until fragrant, about 1 minute. </li>
                <li>Add wine, and bring to a simmer. Add clams, and stir to combine. Cover and steam until clams have opened, 5 to 7 minutes. Remove from heat. Use a slotted spoon to transfer clams to a rimmed baking sheet to cool, discarding any that do not open. Strain clam broth through a fine sieve, and reserve for making stuffing</li>
                <li>When clams are cool enough to handle, remove all meat, and reserve. Remove half of each clam shell, and discard. Arrange the remaining halves on a rimmed baking sheet. Cut each clam into ½inch pieces; return pieces to shell. (Clams can be prepared to this point up to 1 day ahead. Cover with plastic wrap and refrigerate.)</li>
                <li>Preheat oven to 350° F. Dividing evenly, press stuffing into clam shells, smoothing with the back of a spoon. Bake until tops are golden, 25 to 30 minutes. Nestle clams on seaweed, if desired, and serve immediately</li>
            </ol>
            <h3>Directions - Herbed Breadcrumb Stuffing</h3>
            <ol>
                <li>Heat olive oil in a saute pan. Cook onion and garlic until translucent, stirring frequently, about 5 minutes. Remove from heat and let cool completely</li>
                <li>Stir together onion mixture, almond flour, breadcrumbs, herbs and butter in a bowl; season with salt and pepper. Stir in just enough clam broth to moisten stuffing</li>
            </ol>
        </Container>
    )
}

export default StuffedClamsRecipeContainer;