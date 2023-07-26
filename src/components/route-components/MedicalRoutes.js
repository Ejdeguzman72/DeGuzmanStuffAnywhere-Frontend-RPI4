import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MedicalOfficePageComponent from '../medical-offices/MedicalOfficePageComponent';
import MedicalOfficeGridPage from '../medical-offices/MedicalOfficeGridPage';
import MedicalOffice from '../medical-offices/MedicalOffice';

const MedicalRoutes = () => {
    return (
        <HashRouter>
            <Switch>
            <Route path="/medical-offices-table" exact component={MedicalOfficePageComponent} />
                <Route path="/medical-office-grid" exact component={MedicalOfficeGridPage} />
                <Route path="/update-medical-office/:medicalOfficeId" exact component={MedicalOffice} />
            </Switch>
        </HashRouter>
    )
}

export default MedicalRoutes;
