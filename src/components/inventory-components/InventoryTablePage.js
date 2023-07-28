import React from 'react';
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import InventoryTabs from '../tab-components/InventoryTabs';
import InventoryTable from './InventoryTable';

const InventoryTablePage = () => {
    return (
        <div>
            <Helmet>
                <title>Inventory - Table View</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <InventoryTabs />
                <br></br>
                <InventoryTable />
            </div>
            <FooterComponent />
        </div>
    )
}

export default InventoryTablePage;