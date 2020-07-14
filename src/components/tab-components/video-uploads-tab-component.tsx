import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const VideoUplaodsTabComponent = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#videos" eventKey="first" id="tabs">Videos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#video-uploads" eventKey="second" id="tabs">Uploads</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default VideoUplaodsTabComponent;