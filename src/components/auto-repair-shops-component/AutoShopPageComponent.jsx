import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { AutoFinanceTabsComponent } from '../tab-components/AutoFinanceTabsComponent';
import AutoShopTableComponent from './AutoShopTableComponent';
import AutoShopList from './AutoShopList';

const AutoShopPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>View All Auto Shops</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <AutoFinanceTabsComponent />
                <br></br>
                <AutoShopTableComponent />
            </div>
            <FooterComponent />
        </div>
    )
}

export default AutoShopPageComponent;