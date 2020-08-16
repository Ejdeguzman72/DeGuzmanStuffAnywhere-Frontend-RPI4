import React from 'react';
import { Helmet } from 'react-helmet';
import UtilityTrackerTable from './utility-tracker-table-component';
import UtilityContainerComponent from './utility-container-component';

const UtilityPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Utility Information</title>
                
            </Helmet>
            <div id="white-background">
                <br></br>
                <br></br>
                <UtilityContainerComponent />
                <br></br>
                <br></br>
                <UtilityTrackerTable />
            </div>
        </div>
    )
}

export default UtilityPageComponent;