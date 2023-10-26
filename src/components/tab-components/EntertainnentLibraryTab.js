import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const EntertainmentLibraryTab = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#entertainment-page" eventKey="first" id="tabs">Entertainment Library</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default EntertainmentLibraryTab;