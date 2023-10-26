import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const CardioTrackerTabComponent = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#run-tracker-table" eventKey="first" id="tabs">Cardio Tracker</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default CardioTrackerTabComponent;