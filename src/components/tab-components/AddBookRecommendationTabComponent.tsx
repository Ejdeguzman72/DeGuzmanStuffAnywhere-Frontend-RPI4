import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const AddBookRecommendationTabComponent = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#add-book-information" eventKey="first" id="tabs">Add Book Recommendation</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default AddBookRecommendationTabComponent;