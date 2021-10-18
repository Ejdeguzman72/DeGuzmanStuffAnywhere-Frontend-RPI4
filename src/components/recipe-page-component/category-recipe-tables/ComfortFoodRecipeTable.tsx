import React from 'react';
import { Table } from 'react-bootstrap';
import BeefStewBtnComponent from '../recipe-buttons/comfort-food-category-recipe/beef-stew-recipe-btn';
import BeefaroniBtnComponent from '../recipe-buttons/comfort-food-category-recipe/beefaroni-recipe-btn';
import ChiliBtnComponent from '../recipe-buttons/comfort-food-category-recipe/chili-recipe-btn';
import MarinaraRecipeBtnComponent from '../recipe-buttons/comfort-food-category-recipe/marinara-recipe-btn';
import MeatloafbtnComponent from './../recipe-buttons/comfort-food-category-recipe/mealoaf-recipe-btn-component';
import MeatsauceBtnComponent from './../recipe-buttons/comfort-food-category-recipe/meat-sauce-btn';
import MeatballBtnComponent from '../recipe-buttons/italian-category-recipe/meatballs-recipe-btn';
import SalisburySteakBtnComponent from '../recipe-buttons/comfort-food-category-recipe/salisbury-steaks-btn';
import CheeseSpinachQuicheRecipeBtn from '../recipe-buttons/comfort-food-category-recipe/CheeseSpinachQuicheRecipeBtn';
import ChickenPotPieRecipeBtn from '../recipe-buttons/comfort-food-category-recipe/ChickenPotPieRecipeBtn';

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
                        <td>Beef Stew</td>
                        <td><BeefStewBtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Beefaroni</td>
                        <td><BeefaroniBtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Cheese and Spinach Quiche</td>
                        <td>
                            <CheeseSpinachQuicheRecipeBtn />
                        </td>
                    </tr>
                    <tr>
                        <td>Chicken Pot Pie</td>
                        <td><ChickenPotPieRecipeBtn /></td>
                    </tr>
                    <tr>
                        <td>Chili</td>
                        <td><ChiliBtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Meatloaf</td>
                        <td><MeatloafbtnComponent /></td>
                    </tr>
                    <tr>
                        <td>Salisbury Steaks</td>
                        <td><SalisburySteakBtnComponent /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default ComfortFoodRecipeTable;