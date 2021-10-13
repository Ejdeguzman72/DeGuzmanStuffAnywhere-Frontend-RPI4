import React from 'react';
import { Table } from 'react-bootstrap';
import CreamyPastaAndCrunchyMushroomButton from '../recipe-buttons/italian-category-recipe/creamy-mushroom-with-crispy-mushroom-pasta';


const SeafoodRecipeTable = () => {
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
                            <td>  </td>
                            <td>  </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SeafoodRecipeTable;