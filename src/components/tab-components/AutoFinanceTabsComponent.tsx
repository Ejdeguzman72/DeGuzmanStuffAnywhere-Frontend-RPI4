import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

export class AutoFinanceTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Row>
                    <Tab.Container>
                        <Col md={12}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link href="#auto-finance-table" eventKey="first" id="tabs">Auto Finance Info</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Tab.Container>
                </Row>
                <Row>
                    <Tab.Container>
                        <Col md={6}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link href="#/view-cars-table" eventKey="third" id="tabs">View Cars</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={6}>
                            <Nav.Item>
                                <Nav.Link href="#auto-shops-table" eventKey="fourth" id="tabs">View Auto Repair Shops</Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Tab.Container>
                </Row>
            </div>
        )
    }
}