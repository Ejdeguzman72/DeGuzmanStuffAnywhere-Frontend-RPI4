import React from 'react';
import { Helmet } from 'react-helmet';
import { AutoFinanceTabsComponent } from '../../tab-components/AutoFinanceTabsComponent';
import { FooterComponent } from '../../footer-component/footer-component';
import AutoTrxList from './pagination/AutoTrxList';
import AutoFinanceTable from './AutoFinanceTable';

export class AutoFinanceTablePageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Auto Finances</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <AutoFinanceTabsComponent />
                    <br></br>
                    <AutoFinanceTable />
                </div>
                <FooterComponent />
            </div>
        )
    }
}