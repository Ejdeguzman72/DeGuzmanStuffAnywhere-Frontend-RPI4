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
                    <br></br>
                    {/* <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link href="#add-book-information" eventKey="second" id="tabs">Add Book Recommendation</Nav.Link>
                        </Nav.Item>
                    </Nav> */}
                </Col>
            </Tab.Container>
        </Row>
    )
}

export default MusicTabComponent;