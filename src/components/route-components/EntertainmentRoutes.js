import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import EntertainmentPage from '../entertainment-components/EntertainmentPage';

const EntertainmentRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/entertainment-page" exact component={EntertainmentPage} />
            </Switch>
        </HashRouter>
    )
}

export default EntertainmentRoutes;