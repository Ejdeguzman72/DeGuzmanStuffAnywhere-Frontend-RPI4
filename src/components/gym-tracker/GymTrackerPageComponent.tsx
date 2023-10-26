import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import GymTrackerTabComponent from '../tab-components/GymTrackerTabComponent';
import ExerciseInfoTable from './ExerciseInfoTable';
import ExerciseList from './pagination/ExerciseList';
import WeightliftingTabs from '../tab-components/WeightLiftingTabs';
import RunTrackerTabComponent from '../tab-components/CardioTrackerTabComponent';

const GymTrackerPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Gym Tracker</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <GymTrackerTabComponent />
                <RunTrackerTabComponent />
                <br></br>
                <ExerciseInfoTable />
                <br></br>
                <WeightliftingTabs />
            </div>
            <FooterComponent />
        </div>
    )
}

export default GymTrackerPageComponent;