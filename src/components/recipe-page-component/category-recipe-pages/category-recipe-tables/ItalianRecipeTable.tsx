import React from 'react';
import { Table } from 'react-bootstrap';
import CreamyPastaAndCrunchyMushroomButton from '../../recipe-buttons/creamy-mushroom-with-crispy-mushroom-pasta';


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
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ItalianRecipeTable;