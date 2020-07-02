import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';

export class RunTrackerPageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                   <title>Run Tracker</title> 
                </Helmet>
                <div id="white-background">

                </div>
                <FooterComponent />
            </div>
        )
    }
}