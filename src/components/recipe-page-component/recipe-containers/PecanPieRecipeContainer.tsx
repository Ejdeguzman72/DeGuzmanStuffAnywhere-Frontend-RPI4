import React from 'react';
import { Container } from 'react-bootstrap';

const PecanPieRecipeContainerComponent = () => {
    return (
        <Container className="pecan-pie-recipe-container">
            <h1 className="App">Pecan Pie</h1>
            <h3>Ingredients</h3>
            <p>Pie Crust</p>
            <ul className="list">
                <li>3 cups all-purpose flour</li>
                <li>1 teaspoon salt</li>
                <li>3/4 cup vegetable shortening/lard</li>
                <li>1 egg</li>
                <li>1 tablespoon distilled white vinegar</li>
                <li>Onion</li>
            </ul>
            <p>Filling</p>
            <ul className="list">
                <li>1 cup of granulated sugar</li>
                <li>3 tablespoons brown sugar</li>
                <li>1/2 teaspoons of salt</li>
                <li>1 teaspoon of vanilla</li>
                <li>3 whole eggs beaten</li>
                <li>1 cup of chopped peacans</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>First whip up the pie crust: Mix the flour and salt in a bowl. Add the shortening and slated butter. Work the butter into the flour usign a dough cutter until the mixture resembles tiny pebbles</li>
                <li>Add the egg, 5 tablespoons cold water and the white vinegar. Stir until just combined. Divide the dough in half and chill until needed. (You will only need one half for this recipe, reserve the other half for another use</li>
                <li>Next make the filling: Mix the granulated sugar, brown sugar, salt, corn syrup, butter, vanilla and eggs together in a bowl.</li>
                <li>Preheat the oven to 350 degrees F. Roll out one dough half on a lightly floured surface to fit your pie pan. Pour the pecans in the bottom of the unbaked pie shell. Pour the syrup mixture over the top. Cover the top and crust lightly/gently with foil</li>
                <li>Bake the pie for 30 minutes. Remove the foil, and then continue baking for 20 minutes, being careful not to burn the crust or pecans. The pie should not be overly jiggly when you remove it from the oven (though it will jiggle a bit). If it shakes a lot, cover with foil and bake for an additional 20 minute or until set. Required baking time seems to vary widely with this recipe. Sometimes it takes 50 minutes, sometimes it takes 75!</li>
                <li>Allow to cool for several hours or overnight. Serve in thin slivers.</li>
            </ol>
            <br></br>
        </Container>
    )
}

export default PecanPieRecipeContainerComponent;