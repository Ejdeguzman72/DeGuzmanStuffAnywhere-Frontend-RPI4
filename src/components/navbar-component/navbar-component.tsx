import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from 'react-bootstrap';

export class NavBarComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" id="navbar-border">
                    <Navbar.Brand href="#home" className="navbar-item">DeGuzmanStuffAnywhere</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home" className="navbar-item">Home</Nav.Link>
                            <Nav.Link href="#link" className="navbar-item">Photos</Nav.Link>
                            <Nav.Link href="#link" className="navbar-item">Chat</Nav.Link>
                            <NavDropdown title="General Info" className="navbar-item" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" className="navbar-item">Contact Info</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="navbar-item">Birthdays</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="navbar-item">Recipes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="navbar-item">Finance</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-dark" size="lg">Search</Button>
                            <Button variant="outline-info" size="lg" id="button-margin">Log In</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}