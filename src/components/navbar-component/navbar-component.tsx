import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class NavBarComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" id="navbar-border">
                    <Navbar.Brand href="#home" className="navbar-item">DeGuzmanStuffAnywhere</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home" className="navbar-item">Home</Nav.Link> */}
                            <Nav.Link href="#media" className="navbar-item">Photos/Videos</Nav.Link>
                            <Nav.Link href="#chat" className="navbar-item">Chat</Nav.Link>
                            <NavDropdown title="Finance" className="navbar-item" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#general-finance" className="navbar-item">General Finances</NavDropdown.Item>
                                <NavDropdown.Item href="#auto-finance" className="navbar-item">Auto Finances</NavDropdown.Item>
                                <NavDropdown.Item href="#medical-finance" className="navbar-item">Medical Finances</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="More Apps" className="navbar-item" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#contact-info" className="navbar-item">Contact Info</NavDropdown.Item>
                                {/* <NavDropdown.Item href="#birthdays" className="navbar-item">Birthdays</NavDropdown.Item> */}
                                <NavDropdown.Item href="#recipes" className="navbar-item">Recipes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#run-tracker" className="navbar-item">Run Tracker</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-dark" size="lg">Search</Button>
                            <Button variant="outline-info" size="lg" id="button-margin">
                                <Link to="/login">
                                    Login
                                </Link>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}