import React from 'react';
import { Table } from 'react-bootstrap';
import MarinaraRecipeBtnComponent from '../recipe-buttons/comfort-food-category-recipe/marinara-recipe-btn';
import MeatsauceBtnComponent from '../recipe-buttons/comfort-food-category-recipe/meat-sauce-btn';
import ChickenParmesanBtn from '../recipe-buttons/italian-category-recipe/ChickenParmesanBtn';
import CreamyPastaAndCrunchyMushroomButton from '../recipe-buttons/italian-category-recipe/creamy-mushroom-with-crispy-mushroom-pasta';
import MeatballBtnComponent from '../recipe-buttons/italian-category-recipe/meatballs-recipe-btn';
import StuffedShellsRecipeBtn from './../recipe-buttons/italian-category-recipe/StuffedShellsRecipeBtn';

const ItalianRecipeTable = () => {
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
                            <td>Creamy Pasta and Creamy Mushrooms</td>
                            <td> <CreamyPastaAndCrunchyMushroomButton /> </td>
                        </tr>
                        <tr>
                            <td>Stuffed Shells Pasta</td>
                            <td><StuffedShellsRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Chicken Parmesan</td>
                            <td><ChickenParmesanBtn /></td>
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
        </div>
    )
}

export default ItalianRecipeTable;