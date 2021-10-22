import React from 'react';
import { Table } from 'react-bootstrap';
import AdoboBtnComponent from '../recipe-buttons/filipino-category-button/adobo-recipe-btn';
import ArrozCaldoBtn from '../recipe-buttons/filipino-category-button/ArrozCaldoRecipeBtn';
import LecheFlanBtn from '../recipe-buttons/filipino-category-button/LecheFlanBtn';
import UkoyRecipeBtn from '../recipe-buttons/filipino-category-button/UkoyRecipeBtn';
import SinigangRecipeBtn from '../recipe-buttons/filipino-category-button/SinigangRecipeBtn';
import PandesalRecipeBtn from '../recipe-buttons/filipino-category-button/PandesalRecipeBtn';
import LumpiaRecipeBtn from '../recipe-buttons/filipino-category-button/LumpiaRecipeBtn';
import CrispyPataRecipeBtn from '../recipe-buttons/filipino-category-button/CrispyPataRecipeBtn';

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
                            <td>Arroz Caldo (Chicken Rice Porridge)</td>
                            <td><ArrozCaldoBtn /></td>
                        </tr>
                        <tr>
                            <td>Crispy Pata Recipe</td>
                            <td><CrispyPataRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Leche Flan</td>
                            <td>
                                <LecheFlanBtn />
                            </td>
                        </tr>
                        <tr>
                            <td>Lumpia (Spring Rolls)</td>
                            <td><LumpiaRecipeBtn /></td>
                        </tr>

                        <tr>
                            <td>Pandesal</td>
                            <td><PandesalRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Pork Sinigang - Filipino Sour Soup</td>
                            <td><SinigangRecipeBtn /></td>
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