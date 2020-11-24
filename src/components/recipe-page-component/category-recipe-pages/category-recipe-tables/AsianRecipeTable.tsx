import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import PadThaiRecipeBtnComponent from '../../recipe-buttons/pad-thai-recipe-btn';
import PadThaiRecipePageComponent from '../../recipe-pages/pad-thai-recipe-page-component';

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
                            <td>Pad Thai</td>
                            <td><PadThaiRecipeBtnComponent /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}