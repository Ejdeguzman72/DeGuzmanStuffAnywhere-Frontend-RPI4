import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import ViewCarsTableComponent from './car-information-table';

const CarInformationPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>View All Cars</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <br></br>
                <ViewCarsTableComponent/>
            </div>
            <FooterComponent />
        </div>
    )
}

export default CarInformationPageComponent;