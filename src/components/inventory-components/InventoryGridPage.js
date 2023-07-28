import React from 'react';
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import InventoryTabs from '../tab-components/InventoryTabs';
import InventoryList from './InventoryList';

const InventoryGridPage = () => {
    return (
        <div>
            <Helmet>
                <title>Inventory - Table View</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <InventoryTabs />
                <br></br>
                <InventoryList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default InventoryGridPage;