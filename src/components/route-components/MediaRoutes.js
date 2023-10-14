import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import DownloadsPageComponent from '../downloads-component/DownloadsPageComponent';

const MediaRoutes = () => {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route path="/downloads" exact component={DownloadsPageComponent} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default MediaRoutes;