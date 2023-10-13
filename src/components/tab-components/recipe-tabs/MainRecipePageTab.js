import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const MainRecipePageTab = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#recipes" eventKey="first" id="tabs">All Recipes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default MainRecipePageTab;