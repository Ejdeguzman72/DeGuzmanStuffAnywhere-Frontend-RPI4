import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { AutoFinanceTabsComponent } from '../tab-components/auto-finance-tabs-component';
import AutoShopTableComponent from './AutoShopTableComponent';
import AutoShopList from './AutoShopList';
import AutoShopOptionsRow from '../options-row-component/AutoShopOptionsRow';

const AutoShopGridPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>View All Auto Shops - Grid View</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <AutoFinanceTabsComponent />
                <br></br>
                <AutoShopOptionsRow />
                <br></br>
                <AutoShopList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default AutoShopGridPageComponent;