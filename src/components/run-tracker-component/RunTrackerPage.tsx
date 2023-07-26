import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import RunTrackerTableComponent from './RunTrackerTable';
import { RunTrackerContainerComponent } from './RunTrackContainer';
import RunTrackerList from './pagination/RunTrackerList';
import RunOptionsDropdown from '../dropdown-components/RunOptionsDropdown';
import RunTrackerTabComponent from '../tab-components/RunTrackerTabComponent';

export class RunTrackerPageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                   <title>Run Tracker</title> 
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <RunTrackerTabComponent />
                    <br></br>
                    <RunTrackerTableComponent />
                </div>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}