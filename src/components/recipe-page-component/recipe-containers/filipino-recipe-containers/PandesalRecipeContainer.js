import React from 'react';
import { Container } from 'react-bootstrap';

const PandesalRecipeContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Adobo</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>¼ cup warm water</li>
                <li>1 (1/4 ounce) package active dry yeast</li>
                <li>1 cup lukewarm milk</li>
                <li>2 ounces butter, room temperature</li>
                <li>2 eggs, beaten</li>
                <li>½ cup sugar</li>
                <li>1-1/2 teaspoons salt</li>
                <li>4 1/4 cups flour and ¼ to ½ cup more for kneading</li>
                <li>1/2 cup fine breadcrumbs</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>In a large bowl,, combine water and yeast. Allow to sit for 10 minutes until mixture becomes bubbly. Stir well.</li>
                <li>In a small bowl, combine milk, butter, eggs, sugar and salt. Stir together until incorporated.</li>
                <li>Add milk mixture and 2 cups flour to yeast mixture. Using an electric mixer, beat to combine. Gradually add theremaining 2-1/4 cup flour in ½ cup increments and continue to combine all ingredients.</li>
                <li>On a lightlyfloured surface, turn over dough and knead, lightly adding flour as necessary, for about 10 minutes or until smooth, supple and elastic.</li>
                <li>In a lightlyoiled large bowl, place dough. Cover with film and allow to rise for about 1 to 1-1/2 hours or until double in size.</li>
                <li>On a lightlyfloured surface, transfer dough and divide into 24 pieces. Shape each piece into a ball and roll on breadcrumbs to coat. Arrange balls about 1inch apart on a lightlygreased baking sheet. </li>
                <li>Cover with a cloth and allow to rise for about 1 to 1-1/2 hours or until double in size.</li>
                <li>Bake in a 350 F oven for about 15 to 20 minutes or until golden brown. Serve hot.</li>
            </ol>
        </Container>
    )
}

export default PandesalRecipeContainer;