import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import RunTrackerTableComponent from './CardioTrackerTableComponent';
import RunTrackerTabComponent from '../tab-components/CardioTrackerTabComponent';
import GymTrackerTabComponent from '../tab-components/GymTrackerTabComponent';
import CardioTabs from '../tab-components/CardioCategoryTabs';

export class CardioTrackerPageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                   <title>Cardio Tracker</title> 
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <GymTrackerTabComponent />
                    <RunTrackerTabComponent />
                    <br></br>
                    <RunTrackerTableComponent />
                    <br></br>
                    <CardioTabs />
                </div>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}