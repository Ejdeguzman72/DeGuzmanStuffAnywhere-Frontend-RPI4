import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import GymTrackerTabComponent from '../tab-components/GymTrackerTabComponent';
import ExerciseInfoTable from './ExerciseInfoTable';
import ExerciseList from './pagination/ExerciseList';
import GymOptionsDropdown from '../dropdown-components/GymOptionsDropdown';

const GymTrackerGridView = () => {
    return (
        <div>
            <Helmet>
                <title>Gym Tracker - Grid</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <GymTrackerTabComponent />
                <br></br>
                <GymOptionsDropdown />
                <br></br>
                <ExerciseList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default GymTrackerGridView;