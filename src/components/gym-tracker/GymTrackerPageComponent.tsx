import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import GymTrackerTabComponent from '../tab-components/GymTrackerTabComponent';
import ExerciseInfoTable from './ExerciseInfoTable';
import ExerciseList from './pagination/ExerciseList';

const GymTrackerPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Gym Tracker</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <GymTrackerTabComponent />
                <br></br>
                <br></br>
                <br></br>
                <ExerciseInfoTable />
                <br></br>
                <br></br>
                <ExerciseList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default GymTrackerPageComponent;