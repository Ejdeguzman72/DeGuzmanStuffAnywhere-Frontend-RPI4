import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AutoFinanceTablePageComponent } from '../finance-page-component/auto-finance-page-components/AutoFinanceTablePageComponent';
import { AutoFinanceGridPageComponent } from '../finance-page-component/auto-finance-page-components/AutoFinanceGridPage'
import GeneralTransaction from '../finance-page-component/general-finance-page-components/GeneralTransaction';
import { GeneralFinanceGridView } from '../finance-page-component/general-finance-page-components/GeneralFinanceGridView';
import AutoTransaction from '../finance-page-component/auto-finance-page-components/AutoTransaction';
import { MedicalFinancePageComponent } from '../finance-page-component/medical-finance-page-components/MedicalFinancePageComponent';
import { MedicalGridView } from '../finance-page-component/medical-finance-page-components/MedicalTrxGridView';
import MedicalTransaction from '../finance-page-component/medical-finance-page-components/MedicalTransaction';
import { GeneralFinanceTablePageComponent } from '../finance-page-component/general-finance-page-components/GeneralFinanceTablePageComponent';

const FinanceRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/auto-finance-table" exact component={AutoFinanceTablePageComponent} />
                <Route path="/auto-finance-grid" exact component={AutoFinanceGridPageComponent} />
                <Route path="/general-finance-table" exact component={GeneralFinanceTablePageComponent} />
                <Route path="/update-general-transaction/:genTrxId" exact component={GeneralTransaction} />
                <Route path="/general-finance-grid" exact component={GeneralFinanceGridView} />
                <Route path="/update-auto-transaction/:autoTrxId" exact component={AutoTransaction} />
                <Route path="/medical-finance-table" exact component={MedicalFinancePageComponent} />
                <Route path="/medical-finance-grid" exact component={MedicalGridView} />
                <Route path="/update-medical-transaction/:medTrxId" exact component={MedicalTransaction} />
            </Switch>
        </HashRouter>
    )
}

export default FinanceRoutes;