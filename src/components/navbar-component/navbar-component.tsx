import React from 'react';
import { Nav, NavDropdown, Form, FormControl, Button, Navbar, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';  
import { jwtHelper } from '../../helper/jwt';
import { jwtUsernameHelper } from '../../helper/username-helper';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

const jwt = jwtHelper();

export class NavBarComponent extends React.Component<any, any> {
    static async getInitialProps() {
        const token = cookie.load("DeguzmanStuffAnywhere_Token")
        return { token };
    }
    constructor(props: any) {
        super(props);

        this.state = props.token
    }

    parseJwt = (token: any) => {
        if (!token) {
            return;
        }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    
    checkLoggedIn() {
        const jwt = jwtHelper();
        
        if (!jwt) {
            
        }
    }

    logout() {
        localStorage.removeItem('DeGuzmanStuffAnywhere_Token');
        window.location.reload();
    }


    render() {
        console.log(this.parseJwt(localStorage.getItem('DeGuzmanStuffAnywhere_Token')))
        return (
            <div>
                <Navbar bg="light" expand="lg" id="navbar-border">
                    <Navbar.Brand href="#home" className="navbar-item">DeGuzmanStuffAnywhere</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                jwt ? 
                                <Nav.Link href="#media" className="navbar-item">Photos/Videos</Nav.Link> : null
                            }
                            {
                                jwt ? 
                                <Nav.Link href="#chat" className="navbar-item">Chat</Nav.Link> : null
                            }
                            {
                                jwt ? 
                                <NavDropdown title="Finance" className="navbar-item" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#general-finance" className="navbar-item">General Finances</NavDropdown.Item>
                                    <NavDropdown.Item href="#auto-finance" className="navbar-item">Auto Finances</NavDropdown.Item>
                                    <NavDropdown.Item href="#medical-finance" className="navbar-item">Medical Finances</NavDropdown.Item>
                                </NavDropdown> : null
                            }
                            {
                                jwt ?
                                <NavDropdown title="More Apps" className="navbar-item" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#contact-info" className="navbar-item">Contact Info</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="#birthdays" className="navbar-item">Birthdays</NavDropdown.Item> */}
                                    <NavDropdown.Item href="#recipes" className="navbar-item">Recipes</NavDropdown.Item>
                                    <NavDropdown.Item href="#utility-tracker" className="navbar-item">Utility Tracker</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#run-tracker" className="navbar-item">Run Tracker</NavDropdown.Item>
                                </NavDropdown> : null
                            }
                        </Nav>
                        <Form inline>
                            {/* Hello {username} */}
                            {
                                jwt ?
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" id="button-margin"/> : null
                            }
                            {
                                jwt ?
                                <Button variant="outline-info" size="lg" id="button-margin">Search</Button> : null
                            }
                            {
                                jwt ?
                                <Button variant="dark" size="lg" onClick={this.logout}>Logout</Button> :
                                    <Button variant="outline-primary" size="lg">
                                        <Link to="/login">
                                        Login
                                        </Link>
                                    </Button>
                            } 
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}