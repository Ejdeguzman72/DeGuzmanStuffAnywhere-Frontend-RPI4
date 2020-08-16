import React from 'react';
import { Table } from 'react-bootstrap';

export default class UtilityTrackerTable extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Table striped responsive bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className="table-header-text">ID No:</th>
                            <th>Utility Name</th>
                            <th>Phone</th>
                            <th>Utility Website Link</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}