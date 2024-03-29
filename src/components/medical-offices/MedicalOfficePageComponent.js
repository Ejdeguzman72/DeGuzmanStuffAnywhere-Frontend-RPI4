import React from 'react';
import { Helmet } from 'react-helmet';
import { MedicalTabsComponent } from '../tab-components/medical-tabs-component';
import MedicalOfficeTableComponent from './MedicalOfficeTableComponent';
import { FooterComponent } from '../footer-component/footer-component';
import MedicalOfficeList from './MedicalOfficeList';

const MedicalOfficePageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Medical Office
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <MedicalTabsComponent />
                <br></br>
                <MedicalOfficeTableComponent />
            </div>
            <FooterComponent />
        </div>
    )
}

export default MedicalOfficePageComponent