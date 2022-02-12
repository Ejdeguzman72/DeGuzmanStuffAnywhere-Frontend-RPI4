import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import RunTrackerTableComponent from './run-tracker-table-component';
import { RunTrackerContainerComponent } from './run-tracker-container-component';
import RunTrackerList from './pagination/RunTrackerList';

export class RunTrackerPageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                   <title>Run Tracker</title> 
                </Helmet>
                <div id="white-background">
                    {/* <br></br>
                    <br></br>
                    <RunTrackerContainerComponent /> */}
                    <br></br>
                    <br></br>
                    <RunTrackerTableComponent />
                    <br></br>
                    <br></br>
                    <RunTrackerList />
                    <br></br>
                    <br></br>
                </div>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}