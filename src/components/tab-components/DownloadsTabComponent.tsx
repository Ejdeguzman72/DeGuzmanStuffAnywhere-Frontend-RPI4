import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const DownloadsTabComponent = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#downloads" eventKey="first" id="tabs">Downloads</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default DownloadsTabComponent;