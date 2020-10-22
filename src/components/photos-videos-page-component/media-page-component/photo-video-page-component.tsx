import React from 'react';
import { Helmet } from 'react-helmet';
import { MediaPhotoPageContainerComponent } from './photo-page-container-component';
import { VideoPageContainerComponent } from './video-page-container-component';
import { FooterComponent } from '../../footer-component/footer-component';
import { Row, Col } from 'react-bootstrap';

export class PhotoVideoPageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Media</title>
                </Helmet>
                <div id="white-background">
                    <Row>
                        <Col md={4}>
                            <MediaPhotoPageContainerComponent />
                        </Col>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>
                            <VideoPageContainerComponent />
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>

                        </Col>
                        <Col md={4}>
                            
                        </Col>
                    </Row>
                </div>
                <FooterComponent />
            </div>
        )
    }
}