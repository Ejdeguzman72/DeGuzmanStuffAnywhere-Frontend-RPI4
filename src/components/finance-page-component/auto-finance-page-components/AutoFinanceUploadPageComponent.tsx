import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { AutoFinanceTabsComponent } from '../../tab-components/AutoFinanceTabsComponent';
import { AutoFinanceUploadComponent } from '../../file-upload-components/auto-finance-upload-component';

export class AutoFinanceUploadPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        Auto Finance Upload
                    </title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <AutoFinanceTabsComponent />
                    <Container className="container" style={{ width: "auto" }}>
                        <div style={{ margin: "20px" }}>
                            <h3>Auto Finance</h3>
                            <h4>Upload Files</h4>
                        </div> 
                        <AutoFinanceUploadComponent />
                    </Container>
                </div>
            </div>
        )
    }
}