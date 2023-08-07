import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const GymTrackerTabComponent = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#gym-tracker-table" eventKey="first" id="tabs">Gym Tracker</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default GymTrackerTabComponent;