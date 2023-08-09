import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GymTrackerPageComponent from '../gym-tracker/GymTrackerPageComponent';
import GymTrackerGridView from '../gym-tracker/GymTrackerGridView';
import Exercise from '../gym-tracker/Exercise';
import { RunTrackerPageComponent } from '../run-tracker-component/RunTrackerPage';
import { RunTrackerGrid } from '../run-tracker-component/RunTrackerGrid';
import Run from '../run-tracker-component/Run';

const FitnessRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/gym-tracker-table" exact component={GymTrackerPageComponent} />
                <Route path="/gym-tracker-grid" exact component={GymTrackerGridView} />
                <Route path="/update-exercise/:exerciseId" exact component={Exercise} />

                <Route path="/run-tracker-table" exact component={RunTrackerPageComponent} />
                <Route path="/run-tracker-grid" exact component={RunTrackerGrid} />
                <Route path="/update-run/:runId" exact component={Run} />
            </Switch>
        </HashRouter>
    )
}

export default FitnessRoutes;