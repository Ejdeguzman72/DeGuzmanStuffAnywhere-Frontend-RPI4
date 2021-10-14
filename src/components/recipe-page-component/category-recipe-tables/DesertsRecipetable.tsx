import React from 'react';
import { Table } from 'react-bootstrap';
import PecanPieBtnComponent from '../recipe-buttons/desert-category-button/PecanPieRecipeButton';
import PineappleUpsideDownCakeBtn from '../recipe-buttons/desert-category-button/PineappleUpsideDownCakeBtn';
import CarrotCakeRecipeBtn from '../recipe-buttons/desert-category-button/CarrotCakeRecipeBtn';

const DesertsRecipeTable = () => {
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
                            <td>Pecan Pie</td>
                            <td><PecanPieBtnComponent /></td>
                        </tr>
                        <tr>
                            <td>Dad's Pineapple Upside Down Bundt Cake</td>
                            <td><PineappleUpsideDownCakeBtn /></td>
                        </tr>
                        <tr>
                            <td>Dad's Carrot Cake Recipe</td>
                            <td><CarrotCakeRecipeBtn /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default DesertsRecipeTable;