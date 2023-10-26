import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import CardioTrackerList from './pagination/CardioTrackerList';
import CardioOptionsDropdown from '../dropdown-components/CardioOptionsDropdown';
import CardioTrackerTabComponent from '../tab-components/CardioTrackerTabComponent';
import GymTrackerTabComponent from '../tab-components/GymTrackerTabComponent';
import CardioTabs from '../tab-components/CardioCategoryTabs';

export class CardioTrackerGrid extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                   <title>Cardio Tracker</title> 
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <CardioTrackerTabComponent />
                    <GymTrackerTabComponent />
                    <br></br>
                    <CardioOptionsDropdown />
                    <br></br>
                    <CardioTrackerList />
                    <br></br>
                    <CardioTabs />
                </div>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}