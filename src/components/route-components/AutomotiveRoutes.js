import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AutoShopPageComponent from '../auto-repair-shops-component/AutoShopPageComponent';
import AutoShop from '../auto-repair-shops-component/AutoShop';
import VehicleInformationPage from '../vehicle-information-page-component/VehicleInformationPage';
import VehicleGridPage from '../vehicle-information-page-component/VehicleGridViewPage';
import Vehicle from '../vehicle-information-page-component/Vehicle';

const AutomotiveRoutes = () => {
    return (
        <HashRouter>
            <Switch>
            <Route path="/auto-shops" exact component={AutoShopPageComponent} />
                <Route path="/update-autoshop/:auto_shop_id" exact component={AutoShop} />
                <Route path="/view-cars-table" exact component={VehicleInformationPage} />
                <Route path="/view-cars-grid" exact component={VehicleGridPage} />
                <Route path="/update-vehicle/:vehicleId" exact component={Vehicle} />
            </Switch>
        </HashRouter>
    )
}

export default AutomotiveRoutes;