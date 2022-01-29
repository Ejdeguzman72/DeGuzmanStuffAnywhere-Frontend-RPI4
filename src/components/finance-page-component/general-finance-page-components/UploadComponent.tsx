import React from 'react';
import { Helmet } from 'react-helmet';
import { GeneralFileUploadFiles } from '../../file-upload-components/general-finance-upload-component';
import { GeneralFinanceTabsComponent } from '../../tab-components/general-finance-tabs-components';
import { Container } from 'react-bootstrap';

export class GeneralFinanceUploadPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>
                        General Finance Upload
                    </title>
                </Helmet>
                <div id="white-background">
                    <GeneralFinanceTabsComponent />
                    <Container className="container" style={{ width: "auto" }}>
                        <div style={{ margin: "20px" }}>
                            <h3>General Finance</h3>
                            <h4>Upload Files</h4>
                        </div>

                        <GeneralFileUploadFiles />
                    </Container>
                </div>
            </div>
        )
    }
}