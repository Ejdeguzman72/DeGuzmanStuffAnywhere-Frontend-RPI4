import React from 'react';
import { Row, Tab, Col, Nav } from 'react-bootstrap';

export class AsianRecipeTabsComponent extends React.Component<any, any> {
    render() {
        return (
            <Row>
                <Tab.Container>
                    <Col md={12}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link href="#asian-recipes" eventKey="first" id="tabs">Asian Recipes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Tab.Container>
            </Row>
        )
    }
}