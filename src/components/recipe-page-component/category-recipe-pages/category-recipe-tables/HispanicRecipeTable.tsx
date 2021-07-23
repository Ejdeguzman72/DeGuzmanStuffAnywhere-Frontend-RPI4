import React from 'react';
import { Table } from 'react-bootstrap';
import FajitasBtnComponent from '../../recipe-buttons/fajitas-recipe-btn-component';
import { hispanicRecipes } from '../../../../assets/json/HispanicRecipesJson';

const HispanicRecipeTable = () => {
    return (
        // <div>
        //     <div>
        //         <Table striped bordered hover variant="dark">
        //             <thead>
        //                 <tr>
        //                     <th>Recipe Name</th>
        //                     <th>Link</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>Fajitas</td>
        //                     <td> <FajitasBtnComponent /> </td>
        //                 </tr>
        //             </tbody>
        //         </Table>
        //     </div>
        // </div>
        <div>
            {
                hispanicRecipes.map((data,key) => {
                    return (
                        <div key={key}>
                            {data}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HispanicRecipeTable;