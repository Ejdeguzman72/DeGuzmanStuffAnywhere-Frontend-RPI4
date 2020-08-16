import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import RunTrackerTableComponent from './run-tracker-table-component';
import { RunTrackerContainerComponent } from './run-tracker-container-component';

export class RunTrackerPageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                   <title>Run Tracker</title> 
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <br></br>
                    <RunTrackerContainerComponent />
                    <br></br>
                    <br></br>
                    <RunTrackerTableComponent />
                </div>
                <FooterComponent />
            </div>
        )
    }
}