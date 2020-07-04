import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

export class GeneralFinanceTabsComponent extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Row>
          <Tab.Container>
            <Col md={12}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first" id="tabs">General Finance Info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" id="tabs">Uploads</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Tab.Container>
        </Row>
      </div>
    )
  }
}