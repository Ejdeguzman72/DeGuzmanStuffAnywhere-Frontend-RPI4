import React from 'react';
import { Helmet } from 'react-helmet';
import { MedicalTabsComponent } from '../../tab-components/medical-tabs-component';
import MedicalFinancePageTableComponent from './MedicalFInanceTable';
import { FooterComponent } from '../../footer-component/footer-component';
import MedicalTrxList from './pagination/MedicalTrxList';

export class MedicalGridView extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                    <title>
                        Medical Finance - Grid View
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <MedicalTabsComponent />
                    <br></br>
                    <MedicalTrxList />
                </div>
                <FooterComponent />
            </div>
        )
    }
}