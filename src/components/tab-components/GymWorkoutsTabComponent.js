import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const GymWorkoutsTabComponent = () => {
    return (
        <div>
            <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#gym-workouts" eventKey="first" id="tabs">Gym Workouts</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default GymWorkoutsTabComponent;