import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const DeGuzmanStuffAnywhereChatApplicationTab = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#chatroom" eventKey="first" id="tabs">DeGuzmanStuffAnywhere Chat Application</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default DeGuzmanStuffAnywhereChatApplicationTab;