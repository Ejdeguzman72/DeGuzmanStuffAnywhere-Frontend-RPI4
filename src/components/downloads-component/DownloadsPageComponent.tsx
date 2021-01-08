import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import DownloadsTabComponent from '../tab-components/DownloadsTabComponent';
import DownloadsTableComponent from './DownloadsTableComponent';

const DownloadsPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Downloads</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DownloadsTabComponent />
                <br></br>
                <br></br>
                <Row>
                    <Col md={3}>

                    </Col>
                    <Col md={6}>
                        <DownloadsTableComponent />
                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DownloadsPageComponent;