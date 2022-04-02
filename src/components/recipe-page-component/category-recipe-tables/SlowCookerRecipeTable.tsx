import React from 'react';
import { Table } from 'react-bootstrap';
import BlackEyedPeasAndHamHock from '../recipe-buttons/slowcooker-category-button/BlackEyedPeas';
import PotRoastBtn from '../recipe-buttons/slowcooker-category-button/pot-roast-btn-';
import PulledPorkBtn from '../recipe-buttons/slowcooker-category-button/pulled-pork-btn-component';
import StuffedGreenPeppersBtnComponent from '../recipe-buttons/slowcooker-category-button/stuffed-green-peppers-btn';
import { BlackEyedPeasAndHamHockRecipePageComponent } from '../recipe-pages/slowcooker-recipes/BlackEyedPeasPage';
import { PotRoastRecipePageComponent } from '../recipe-pages/slowcooker-recipes/pot-roast-recipe-page-component';
import { PulledPorkRecipePageComponent } from '../recipe-pages/slowcooker-recipes/puled-pork-recipe-page-component';
import { StuffedGreenPeppersPageComponent } from '../recipe-pages/slowcooker-recipes/stuffed-green-peppers-recipe-page-component';

const SlowCookerRecipeTable = () => {
    return (
        <div>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Black-eyed Peas and Ham Hocks</td>
                            <td><BlackEyedPeasAndHamHock /></td>
                        </tr>
                        <tr>
                            <td>Stuffed Green Peppers</td>
                            <td><StuffedGreenPeppersBtnComponent /></td>
                        </tr>
                        <tr>
                            <td>Pulled Pork</td>
                            <td><PulledPorkBtn /></td>
                        </tr>
                        <tr>
                            <td>Pot Roast</td>
                            <td><PotRoastBtn/></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SlowCookerRecipeTable;