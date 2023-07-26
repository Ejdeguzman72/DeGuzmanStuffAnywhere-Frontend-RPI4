import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import RunTrackerTableComponent from './RunTrackerTable';
import { RunTrackerContainerComponent } from './RunTrackContainer';
import RunTrackerList from './pagination/RunTrackerList';
import RunOptionsDropdown from '../dropdown-components/RunOptionsDropdown';

export class RunTrackerGrid extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                   <title>Run Tracker</title> 
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <RunOptionsDropdown />
                    <br></br>
                    <RunTrackerList />
                </div>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}