import React from 'react';
import { Table } from 'react-bootstrap';
import StuffedFlounderRecipeBtn from './../recipe-buttons/seafood-category-button/StuffedFlounderRecipeBtn';
import BakedRedSnapperRecipeBtn from './../recipe-buttons/seafood-category-button/BakedRedSnapper';
import TeriyakiSalmonRecipeBtn from '../recipe-buttons/seafood-category-button/TeriyakiSalmonRecipeBtn';
import StuffedClamsRecipeBtn from '../recipe-buttons/seafood-category-button/StuffedClamsRecipeBtn'
import CrabCakesRecipeBtn from '../recipe-buttons/seafood-category-button/CrabCakesRecipeBtn';

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
                            <td>Baltimore-Style Crab Cakes</td>
                            <td><CrabCakesRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Stuffed Clams</td>
                            <td><StuffedClamsRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Stuffed Flounder</td>
                            <td><StuffedFlounderRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Baked Red Snapper</td>
                            <td><BakedRedSnapperRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Teriyaki Salmon</td>
                            <td><TeriyakiSalmonRecipeBtn /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SeafoodRecipeTable;