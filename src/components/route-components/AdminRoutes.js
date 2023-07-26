import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import AdmimPortalPageComponent from '../admin-portal/AdminPortalPage';
import AddUserPageComponent from '../admin-portal/add-user/add-user-page-component';
import FindUserInfoPageComponent from '../admin-portal/find-user-info/find-user-info-page-component';
import ApproveUserPageComponent from '../admin-portal/approve-user/approve-user-page-component';

const AdminRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/admin-portal" exact component={AdmimPortalPageComponent} />
                <Route path="/add-user" exact component={AddUserPageComponent} />
                <Route path="/find-a-user" exact component={FindUserInfoPageComponent} />
                <Route path="/approve-user" exact component={ApproveUserPageComponent} />
            </Switch>
        </HashRouter>
    )
}

export default AdminRoutes;