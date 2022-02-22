import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

const MusicTabComponent = () => {
    return (
        <Row>
            <Tab.Container>
                <Col md={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#music" eventKey="first" id="tabs">Music</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {/* <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#add-song-information" eventKey="second" id="tabs">Add Music</Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default MusicTabComponent;