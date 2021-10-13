import React from 'react';
import { Table } from 'react-bootstrap';
import AdoboBtnComponent from '../recipe-buttons/filipino-category-button/adobo-recipe-btn';
import LecheFlanBtn from '../recipe-buttons/filipino-category-button/LecheFlanBtn';
import UkoyRecipeBtn from '../recipe-buttons/filipino-category-button/UkoyRecipeBtn';

const FilipinoRecipeTable = () => {
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
                            <td>Chicken / Pork Adobo</td>
                            <td> <AdoboBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Leche Flan</td>
                            <td>
                                <LecheFlanBtn />
                            </td>
                        </tr>
                        <tr>
                            <td>Ukoy - Leek and Shrimp Fritters</td>
                            <td><UkoyRecipeBtn /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default FilipinoRecipeTable;