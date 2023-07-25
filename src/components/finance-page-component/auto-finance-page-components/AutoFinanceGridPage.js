import React from 'react';
import { Helmet } from 'react-helmet';
import { AutoFinanceTabsComponent } from '../../tab-components/auto-finance-tabs-component';
import { FooterComponent } from '../../footer-component/footer-component';
import AutoTrxList from './pagination/AutoTrxList';
import AutoFinanceTable from './AutoFinanceTable';
import AutoShopOptionsRow from '../../options-row-component/AutoShopOptionsRow';

export const AutoFinanceGridPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Auto Finances</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <AutoFinanceTabsComponent />
                <br />
                <AutoShopOptionsRow />
                <br></br>
                <AutoTrxList />
            </div>
            <FooterComponent />
        </div>
    )
}