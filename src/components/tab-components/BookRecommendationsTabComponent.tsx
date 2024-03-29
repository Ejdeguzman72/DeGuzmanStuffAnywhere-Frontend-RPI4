import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const BookrecommendationsTabComponent = () => {
    return (
        <div>
             <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#book-recommendations-grid" eventKey="first" id="tabs">Book Recommendations</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default BookrecommendationsTabComponent;