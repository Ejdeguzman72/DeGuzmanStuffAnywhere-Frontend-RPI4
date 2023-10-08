import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NewsroomPageComponent from '../news-component/NewsroomPageComponent';

const NewsRoomRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/newsroom" exact component={NewsroomPageComponent} />
            </Switch>
        </HashRouter>
    )
}

export default NewsRoomRoutes;