import React from 'react';
import { Helmet } from 'react-helmet';
import  FinancePageTableComponent  from '../../general-info-components/finance-page-component/finance-page-table-component';
import { FooterComponent } from '../../footer-component/footer-component';

export class FinancePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Finance</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <FinancePageTableComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}