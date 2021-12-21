import React from 'react';
import { Helmet } from 'react-helmet';
import GymWorkoutsTabComponent from '../../tab-components/GymWorkoutsTabComponent';
import { FooterComponent } from '../../footer-component/footer-component';

const GymWorkoutsPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Gym Workouts</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <GymWorkoutsTabComponent />
                <br></br>
                <br></br>
                <br></br>
                
            </div>
            <FooterComponent />
        </div>
    )
}

export default GymWorkoutsPageComponent;