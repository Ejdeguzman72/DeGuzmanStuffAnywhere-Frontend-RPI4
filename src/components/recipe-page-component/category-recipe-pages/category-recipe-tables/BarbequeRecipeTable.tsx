import React from 'react';
import { Table } from 'react-bootstrap';

const BarbequeRecipeTable = () => {
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
                    
                </tbody>
            </Table>
        </div>
    )
}

export default BarbequeRecipeTable;