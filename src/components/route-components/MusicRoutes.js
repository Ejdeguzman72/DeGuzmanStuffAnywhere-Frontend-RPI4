import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MusicRecommendationPageComponent from '../music-recommendations/MusicRecommendationPageComponent';
import Song from '../music-recommendations/Song';

const MusicRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/music" exact component={MusicRecommendationPageComponent} />
                <Route path="/update-music/:songId" exact component={Song} />
            </Switch>
        </HashRouter>
    )
}

export default MusicRoutes;