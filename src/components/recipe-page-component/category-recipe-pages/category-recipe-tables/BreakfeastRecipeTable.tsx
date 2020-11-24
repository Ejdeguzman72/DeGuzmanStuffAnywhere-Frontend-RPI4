import React from 'react';
import { Table } from 'react-bootstrap';

const BreakfeastRecipeTable = () => {
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
                        <td>Breakfeast Strata</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default BreakfeastRecipeTable;