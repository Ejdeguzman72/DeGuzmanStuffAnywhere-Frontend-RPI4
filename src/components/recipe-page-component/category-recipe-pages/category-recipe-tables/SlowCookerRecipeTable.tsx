import React from 'react';
import { Table } from 'react-bootstrap';
import BlackEyedPeasAndHamHock from '../../recipe-buttons/black-eyed-peas-and-hamhock-recipe-btn';
import PotRoastBtn from '../../recipe-buttons/pot-roast-btn-';
import PulledPorkBtn from '../../recipe-buttons/pulled-pork-btn-component';
import StuffedGreenPeppersBtnComponent from '../../recipe-buttons/stuffed-green-peppers-btn';
import { BlackEyedPeasAndHamHockRecipePageComponent } from '../../recipe-pages/black-eyed-peas-and-hamhocks-recipe-page-component';
import { PotRoastRecipePageComponent } from '../../recipe-pages/pot-roast-recipe-page-component';
import { PulledPorkRecipePageComponent } from '../../recipe-pages/puled-pork-recipe-page-component';
import { StuffedGreenPeppersPageComponent } from '../../recipe-pages/stuffed-green-peppers-recipe-page-component';

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