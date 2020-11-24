import React from 'react';
import { Table } from 'react-bootstrap';
import FajitasBtnComponent from '../../recipe-buttons/fajitas-recipe-btn-component';

const HispanicRecipeTable = () => {
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
                            <td>Fajitas</td>
                            <td> <FajitasBtnComponent /> </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default HispanicRecipeTable;