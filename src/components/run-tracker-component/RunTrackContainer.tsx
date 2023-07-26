import React from 'react';
import { Container } from 'react-bootstrap';
import '../../style-sheets/run-tracker-page.css';

export class RunTrackerContainerComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Container className="run-tracker-page-container">
                    <h1>Run Tracker</h1>
                    <p>
                        This section covers run tracker information. View and submit your run progress to hep you stay in shape. 
                        Compete against other family members and have fun getting heealthy. TImes can be added to the progress and tracker.
                        Make sure to enter times truthfully to show accurate results.  
                    </p>
                </Container>
            </div>
        )
    }
}