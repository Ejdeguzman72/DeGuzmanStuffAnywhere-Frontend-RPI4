import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import GymTrackerPageComponent from '../gym-tracker/GymTrackerPageComponent';
import GymTrackerGridView from '../gym-tracker/GymTrackerGridView';
import Exercise from '../gym-tracker/Exercise';
import { CardioTrackerPageComponent } from '../run-tracker-component/CardioTrackerPage';
import { CardioTrackerGrid } from '../run-tracker-component/CardioTrackerGrid';
import Cardio from '../run-tracker-component/Cardio';

const FitnessRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/gym-tracker-table" exact component={GymTrackerPageComponent} />
                <Route path="/gym-tracker-grid" exact component={GymTrackerGridView} />
                <Route path="/update-exercise/:exerciseId" exact component={Exercise} />

                <Route path="/run-tracker-table" exact component={CardioTrackerPageComponent} />
                <Route path="/run-tracker-grid" exact component={CardioTrackerGrid} />
                <Route path="/update-run/:runId" exact component={Cardio} />
            </Switch>
        </HashRouter>
    )
}

export default FitnessRoutes;