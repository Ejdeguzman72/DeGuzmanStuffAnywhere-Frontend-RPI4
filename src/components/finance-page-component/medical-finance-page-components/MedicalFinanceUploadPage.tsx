import React from 'react';
import { Helmet } from 'react-helmet';
import { MedicalTabsComponent } from '../../tab-components/medical-tabs-component';
import { MedicalFileUploadFiles } from '../../file-upload-components/medical-finance-upload-omponent';
import { Container } from 'react-bootstrap';

export class MedicalFinanceUploadPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Medical Finance Uploads</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <MedicalTabsComponent />
                    <Container className="container" style={{ width: "auto" }}>
                        <div style={{ margin: "20px" }}>
                            <h3>Medical Finance</h3>
                            <h4>Upload Files</h4>
                        </div>

                        <MedicalFileUploadFiles />

                    </Container>
                </div>
            </div>
        )
    }
}