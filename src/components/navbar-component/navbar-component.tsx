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

    // parseJwt = (token: any) => {
    //     if (!token) {
    //         return "";
    //     }
    //     const base64Url = token.split('.')[1];
    //     const base64 = base64Url.replace('-', '+').replace('_', '/');
    //     return JSON.parse(window.atob(base64));
    // }

    // tokenExtracted = this.parseJwt(localStorage.getItem('DeGuzmanStuffAnywhere_Token'));

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
        return (
            <div>
                <Navbar bg="light" expand="lg" id="navbar-border">
                    <Navbar.Brand href="#home" className="navbar-item">DeGuzmanStuffAnywhere</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                jwt ?
                                    <Nav.Link href="#newsroom" className="navbar-item">Newsroom</Nav.Link> : null
                            }
                            {
                                jwt ?
                                    <NavDropdown title="Finance" className="navbar-item" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#auto-finance-table" className="navbar-item">Auto Finances</NavDropdown.Item>
                                        <NavDropdown.Item href="#general-finance-table" className="navbar-item">General Finances</NavDropdown.Item>
                                        <NavDropdown.Item href="#medical-finance-table" className="navbar-item">Medical Finances</NavDropdown.Item>
                                    </NavDropdown> : null
                            }
                            {
                                jwt ?
                                    <NavDropdown title="More Apps" className="navbar-item" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#book-recommendations-grid" className="navbar-item">Book Recommendations</NavDropdown.Item>
                                        <NavDropdown.Item href="#contact-info-table" className="navbar-item">Contact Info</NavDropdown.Item>
                                        <NavDropdown.Item href="#downloads" className="navbar-item">Downloads</NavDropdown.Item>
                                        <NavDropdown.Item href="#entertainment-page" className="navbar-item">Entertainment Library</NavDropdown.Item>
                                        <NavDropdown.Item href="#gym-tracker-table" className="navbar-item">Fitness</NavDropdown.Item>
                                        <NavDropdown.Item href="#inventory-table" className="navbar-item">Garage Inventory</NavDropdown.Item>
                                        <NavDropdown.Item href="#music" className="navbar-item">Music</NavDropdown.Item>
                                        <NavDropdown.Item href="#social-media-feed" className="navbar-item">Social Media</NavDropdown.Item>
                                        <NavDropdown.Item href="#recipe-categories" className="navbar-item">Recipes</NavDropdown.Item>
                                        <NavDropdown.Item href="#restaurant-recommendations-table" className="navbar-item">Restaurants</NavDropdown.Item>
                                        <NavDropdown.Item href="#utility-tracker" className="navbar-item">Utilities</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown> : null
                            }
                            {/* {
                                jwt ?
                                    <NavDropdown title="Fitness" className="navbar-item" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#run-tracker-table" className="navbar-item">Run Tracker</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#gym-tracker-table" className="navbar-item">Gym Tracker</NavDropdown.Item>
                                    </NavDropdown> : null
                            } */}

                        </Nav>
                        <Form inline>
                            {/* {
                                jwt ?
                                    <div>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" id="button-margin" />
                                        <Button variant="outline-info" size="lg" id="button-margin">Search</Button>
                                    </div> : null
                            } */}
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