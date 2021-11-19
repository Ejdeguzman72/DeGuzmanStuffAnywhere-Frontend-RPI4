import React from 'react';
import { Table } from 'react-bootstrap';
import FajitasBtnComponent from '../recipe-buttons/hispanic-category-recipe/fajitas-recipe-btn-component';
import ChilaquilesRecipeBtn from '../recipe-buttons/hispanic-category-recipe/ChilaquilesRecipeBtn';
import EnchiladasRecipeBtn from '../recipe-buttons/hispanic-category-recipe/EnchiladasRecipeBtn';
import { hispanicRecipes } from '../../../assets/json/HispanicRecipesJson';

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
                            <td>Chilaquiles</td>
                            <td> <ChilaquilesRecipeBtn /> </td>
                        </tr>
                        <tr>
                            <td>Echiladas</td>
                            <td> <EnchiladasRecipeBtn /> </td>
                        </tr>
                        <tr>
                            <td>Fajitas</td>
                            <td> <FajitasBtnComponent /> </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
        // <div>
        //     {
        //         hispanicRecipes.map((data,key) => {
        //             return (
        //                 <div key={key}>
        //                     {data}
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
    )
}

export default HispanicRecipeTable;