import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from 'react-bootstrap';

export class NavBarComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">DeGuzmanStuffAnywhere</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Photos</Nav.Link>
                            <Nav.Link href="#link">Chat</Nav.Link>
                            <NavDropdown title="General Info" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Contact Info</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Birthdays</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Recipes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Finance</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                            <Button variant="outline-success" id="button-margin">Log In</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}