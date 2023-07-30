import React from 'react';
import { Helmet } from 'react-helmet';
import { MedicalTabsComponent } from '../../tab-components/medical-tabs-component';
import MedicalFinancePageTableComponent from './MedicalFInanceTable';
import { FooterComponent } from '../../footer-component/footer-component';

export class MedicalFinancePageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                    <title>
                        Medical Finance
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <MedicalTabsComponent />
                    <br></br>
                    <MedicalFinancePageTableComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}