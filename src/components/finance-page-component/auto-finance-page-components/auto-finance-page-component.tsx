import React from 'react';
import { Helmet } from 'react-helmet';
import { AutoFinanceTabsComponent } from '../../tab-components/auto-finance-tabs-component';
import AutoFinancePageTableComponent from './auto-finance-table-component';

export class AutoFinancePageComponent extends React.Component<any,any> {
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
                    <AutoFinancePageTableComponent />
                </div>
            </div>
        )
    }
}