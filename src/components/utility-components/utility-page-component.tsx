import React from 'react';
import { Helmet } from 'react-helmet';

import UtilityContainerComponent from './utility-container-component';
import UtilityTableComponent from './utility-tracker-table-component';

const UtilityPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Utility Information</title>
                
            </Helmet>
            <div id="white-background">
                {/* <UtilityContainerComponent /> */}
                <br></br>
                <br></br>
             <UtilityTableComponent />
            </div>
        </div>
    )
}

export default UtilityPageComponent;