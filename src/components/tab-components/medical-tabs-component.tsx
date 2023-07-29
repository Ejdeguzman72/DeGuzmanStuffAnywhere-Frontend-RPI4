import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

export class MedicalTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Row>
                    <Tab.Container>
                        <Col md={12}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link href="#medical-finance-table" eventKey="first" id="tabs">Medical Finance Info</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Tab.Container>
                </Row>
                <Row>
                    <Tab.Container>
                        <Col md={6}>
                            <Nav.Link href="#medical-office-table" eventKey="third" id="tabs">Medical Offices</Nav.Link>
                        </Col>
                        <Col md={6}>
                            <Nav.Item>
                                <Nav.Link href="#medical-finance-uploads" eventKey="second" id="tabs">Uploads</Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Tab.Container>
                </Row>
            </div>
        )
    }
}