import React from 'react';
import { Table } from 'react-bootstrap';
import BeefStewBtnComponent from '../../recipe-buttons/beef-stew-recipe-btn';
import BeefaroniBtnComponent from '../../recipe-buttons/beefaroni-recipe-btn';
import ChiliBtnComponent from '../../recipe-buttons/chili-recipe-btn';
import MarinaraRecipeBtnComponent from '../../recipe-buttons/marinara-recipe-btn';
import MeatloafbtnComponent from '../../recipe-buttons/mealoaf-recipe-btn-component';
import MeatsauceBtnComponent from '../../recipe-buttons/meat-sauce-btn';
import MeatballBtnComponent from '../../recipe-buttons/meatballs-recipe-btn';
import SalisburySteakBtnComponent from '../../recipe-buttons/salisbury-steaks-btn';

const ComfortFoodRecipeTable = () => {
    return (
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
                        <td>Salisbury Steaks</td>
                        <td><SalisburySteakBtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Meatloaf</td>
                        <td><MeatloafbtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Beef Stew</td>
                        <td><BeefStewBtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Chili</td>
                        <td><ChiliBtnComponent /></td>
                    </tr>

                    <tr>
                        <td>Beefaroni</td>
                        <td><BeefaroniBtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Basic Marinara Sauce</td>
                        <td><MarinaraRecipeBtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Meat Sauce</td>
                        <td> <MeatsauceBtnComponent /> </td>
                    </tr>
                    <tr>
                        <td>Meatballs</td>
                        <td> <MeatballBtnComponent /> </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ComfortFoodRecipeTable;