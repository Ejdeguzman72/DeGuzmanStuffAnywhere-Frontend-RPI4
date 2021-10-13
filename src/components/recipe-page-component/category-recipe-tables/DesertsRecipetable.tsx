import React from 'react';
import { Table } from 'react-bootstrap';
import BlackEyedPeasAndHamHock from '../recipe-buttons/slowcooker-category-button/black-eyed-peas-and-hamhock-recipe-btn';
import PecanPieBtnComponent from '../recipe-buttons/desert-category-button/PecanPieRecipeButton';

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
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default DesertsRecipeTable;