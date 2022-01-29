import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { AutoFinanceTabsComponent } from '../tab-components/auto-finance-tabs-component';
import ViewCarsTableComponent from './VehicleInformationTable';
import VehicleList from './VehicleList';

const VehicleInformationPage = () => {
    return (
        <div>
            <Helmet>
                <title>View All Cars</title>
            </Helmet>
            <div id="white-background">
                <AutoFinanceTabsComponent />
                <br></br>
                <br></br>
                <ViewCarsTableComponent />
                <br></br>
                <VehicleList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default VehicleInformationPage;