import React from 'react';
import SearchAutoShopForm from './SearchAutoShopForm';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { AutoFinanceTabsComponent } from '../tab-components/AutoFinanceTabsComponent';

const SearchAutoShopPage = () => {

    return (
        <div>
            <Helmet>
                <title>Search Auto Shop Information</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <AutoFinanceTabsComponent />
                <br></br>
                <SearchAutoShopForm />
            </div>
            <FooterComponent />
        </div>
    )
}

export default SearchAutoShopPage;