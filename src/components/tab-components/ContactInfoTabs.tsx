import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const ContactInfoTabs = () => {
    return (
        <div>
            <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#contact-info" eventKey="first" id="tabs">Contact Information</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default ContactInfoTabs;