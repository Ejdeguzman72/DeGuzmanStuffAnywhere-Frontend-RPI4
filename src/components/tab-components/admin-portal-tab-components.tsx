import React from 'react';
import { render } from '@testing-library/react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const AdminPortalTabComponent = () => {
    return (
        <div>
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#recipes" eventKey="first" id="tabs">Find a User</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#recipes" eventKey="first" id="tabs">Add a New User</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#recipes" eventKey="first" id="tabs">Approve a New User</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    </div>
    )
}

export default AdminPortalTabComponent;