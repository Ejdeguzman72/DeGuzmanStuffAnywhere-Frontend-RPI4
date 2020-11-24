import React from 'react';
import { Table } from 'react-bootstrap';
import BlackEyedPeasAndHamHock from '../../recipe-buttons/black-eyed-peas-and-hamhock-recipe-btn';

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
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default DesertsRecipeTable;