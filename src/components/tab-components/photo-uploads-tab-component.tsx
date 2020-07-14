import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const PhotoUploadsTabComponent = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#photos" eventKey="first" id="tabs">Photos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#photo-uploads" eventKey="second" id="tabs">Uploads</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default PhotoUploadsTabComponent;