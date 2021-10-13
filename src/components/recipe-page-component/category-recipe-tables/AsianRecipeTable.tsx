import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import PadThaiRecipeBtnComponent from '../recipe-buttons/asian-category-button/pad-thai-recipe-btn';
import PekingStylePorkChopsBtn from '../recipe-buttons/asian-category-button/PekingStylePorkChopsBtn';
import PanFriedNoodlesBtn from '../recipe-buttons/asian-category-button/PanFriedNoodlesBtn';
import BeefAndBroccoliRecipeBtn from '../recipe-buttons/asian-category-button/BeefAndBroccoliBtn';

export class AsianRecipeTable extends React.Component<any, any> {
    render() {
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
                            <td>Beef and Broccoli</td>
                            <td><BeefAndBroccoliRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Pad Thai</td>
                            <td><PadThaiRecipeBtnComponent /></td>
                        </tr>
                        <tr>
                            <td>Peking Style Porkchops</td>
                            <td>
                                <PekingStylePorkChopsBtn />
                            </td>
                        </tr>
                        <tr>
                            <td>Pan Fried Noodles</td>
                            <td><PanFriedNoodlesBtn /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}