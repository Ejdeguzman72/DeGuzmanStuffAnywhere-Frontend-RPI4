import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import GymTrackerTabComponent from '../tab-components/GymTrackerTabComponent';
import ExerciseInfoTable from './ExerciseInfoTable';
import ExerciseList from './pagination/ExerciseList';
import GymOptionsDropdown from '../dropdown-components/GymOptionsDropdown';
import WeightliftingTabs from '../tab-components/WeightLiftingTabs';
import RunTrackerTabComponent from '../tab-components/CardioTrackerTabComponent';

const GymTrackerGridView = () => {
    return (
        <div>
            <Helmet>
                <title>Gym Tracker - Grid</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <GymTrackerTabComponent />
                <RunTrackerTabComponent />
                <br></br>
                <GymOptionsDropdown />
                <br></br>
                <ExerciseList />
                <br></br>
                <WeightliftingTabs />
            </div>
            <FooterComponent />
        </div>
    )
}

export default GymTrackerGridView;