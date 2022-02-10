import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../../footer-component/footer-component';
import { GeneralFinanceTabsComponent } from '../../tab-components/general-finance-tabs-components';
import GeneralFinancePageTableComponent from './GeneralFinanceTable';
import GeneralTrxList from './pagination/GeneralTrxList';

export class GeneralFinancePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Finance</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <GeneralFinanceTabsComponent />
                    <br></br>
                    <GeneralFinancePageTableComponent />
                    <br></br>
                    <br></br>
                    <GeneralTrxList />
                </div>
                <FooterComponent />
            </div>
        )
    }
}