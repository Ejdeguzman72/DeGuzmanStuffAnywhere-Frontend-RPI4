import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import InventoryTablePage from '../inventory-components/InventoryTablePage';
import InventoryGridPage from '../inventory-components/InventoryGridPage';

const InventoryRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/inventory-table" exact component={InventoryTablePage} />
                <Route path="/inventory-grid" exact component={InventoryGridPage} />
            </Switch>
        </HashRouter>
    )
}

export default InventoryRoutes;