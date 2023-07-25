import React from 'react';
import { Helmet } from 'react-helmet';
import { MedicalTabsComponent } from '../tab-components/medical-tabs-component';
import { FooterComponent } from '../footer-component/footer-component';
import MedicalOfficeList from './MedicalOfficeList';
import MedicalOfficeOptionsDropdown from '../dropdown-components/MedicalOfficeOptionsDropdown';

const MedicalOfficeGridPage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Medical Office - Grid View
                </title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <MedicalTabsComponent />
                <br></br>
                <MedicalOfficeOptionsDropdown />
                <hr></hr>
                <MedicalOfficeList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default MedicalOfficeGridPage;