import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const RestaurantTabComponent = () => {
    return (
        <div>
            <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#restaurant-recommendations-table" eventKey="first" id="tabs">Restaurant Recommendations</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default RestaurantTabComponent;