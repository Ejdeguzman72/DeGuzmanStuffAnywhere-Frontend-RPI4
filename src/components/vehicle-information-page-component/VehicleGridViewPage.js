import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { AutoFinanceTabsComponent } from '../tab-components/AutoFinanceTabsComponent';
import ViewCarsTableComponent from './VehicleInformationTable';
import VehicleList from './VehicleList';
import VehicleOptionsDropdown from '../dropdown-components/VehicleOptionsDropdown';

const VehicleGridPage = () => {
    return (
        <div>
            <Helmet>
                <title>View All Cars - Grid View</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <AutoFinanceTabsComponent />
                <br></br>
                <VehicleOptionsDropdown />
                <br></br>
                <VehicleList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default VehicleGridPage;