import React from 'react';
import { Table } from 'react-bootstrap';
import FrenchToastRecipeBtn from '../recipe-buttons/breakfeast-category-button/FrenchToastRecipeBtn';
import BreakfeastStrataBtn from './../recipe-buttons/breakfeast-category-button/BreakfeastStrataBtn';
import PancakeRecipeBtn from './../recipe-buttons/breakfeast-category-button/PancakesRecipeBtn';

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
                        <td><BreakfeastStrataBtn /></td>
                    </tr>
                    <tr>
                        <td>Pancakes</td>
                        <td><PancakeRecipeBtn /></td>
                    </tr>
                    <tr>
                        <td>French Toast</td>
                        <td><FrenchToastRecipeBtn /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default BreakfeastRecipeTable;