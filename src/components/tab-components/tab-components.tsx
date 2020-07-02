import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

export class GeneralFinanceTabsComponent extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Row>
          <Tab.Container>
            <Row>
              <Col md={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">General Finance Info</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Gen Document Uploads</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="third">Medical Finance Info</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Med Document Uploads</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={4}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">Auto Finance Info</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth">Auto Document Uploads</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
      </div>
    )
  }
}