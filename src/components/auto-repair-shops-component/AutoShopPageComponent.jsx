import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { AutoFinanceTabsComponent } from '../tab-components/auto-finance-tabs-component';
import AutoShopTableComponent from './AutoShopTableComponent';
import AutoShopList from './AutoShopList';

const AutoShopPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>View All Auto Shops</title>
            </Helmet>
            <div id="white-background">
                <AutoFinanceTabsComponent />
                <br></br>
                <br></br>
                <AutoShopTableComponent />
                <br></br>
                <AutoShopList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default AutoShopPageComponent;