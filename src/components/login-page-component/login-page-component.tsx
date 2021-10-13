import React from 'react';
import { Helmet } from 'react-helmet';
import { Form, Button } from 'react-bootstrap';
import '../../style-sheets/login-page.css';
import { FooterComponent } from '../footer-component/footer-component';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { jwtHelper } from '../../helper/jwt';
import { Link } from 'react-router-dom';

const jwt = jwtHelper;

export class LoginPageComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: '',
            shouldRedirect: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event:any) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event:any) {
        event.preventDefault();
        Axios.post("localhost:8080/login", {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            localStorage.setItem("DeGuzmanStuffAnywhere_Token", res.data.token);
            console.log(res.data.token);
            this.setState({
                shouldRedirect: true
            });
            window.location.reload();
            console.log(res.data.token);
            alert(`${this.state.username} has logged in!`);
        }).catch(() => {
            alert("Incorrect username/password. Please try again");
        }).catch(() => {
            alert(`${this.state.username} is not enabled`);
        })
        console.log(localStorage.getItem("DeGuzmanStuffAnwhere_Token") + "This is the token");
    }
    
    onLogout = (event:any) => {
        localStorage.removeItem("DeGuzmanStuffAnywhere_Token");
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="login-container">
                        {this.state.shouldRedirect ? <Redirect to="/home"  /> : null}
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label className="login-container-title">DeGuzmanStuffAnywhere</Form.Label>
                                <hr></hr>
                                {/* <Form.Label className="login-form-label">Username</Form.Label> */}
                                <Form.Control 
                                    type="text"
                                    name="username" 
                                    className="login-form-input" 
                                    placeholder="Enter username" 
                                    value={this.state.username}
                                    onChange={(event: any) => this.onChange(event)} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                {/* <Form.Label className="login-form-label">Password</Form.Label> */}
                                <Form.Control 
                                    type="password" 
                                    name="password"
                                    className="login-form-input" 
                                    placeholder="Password" 
                                    value={this.state.password}
                                    onChange={(event:any) => this.onChange(event)}
                                />
                            </Form.Group>
                            <p className="login-container-warning">Contact (201)-546-0750
                                or email (ejdeguzman72@gmail.com) for assistance.
                            </p>
                            <div className="deguzmanrecipesanywhere-btn">
                             </div>   
                            <Button 
                                size="lg" 
                                variant="dark"
                                className="deguzmanrecipesanywhere-btn"
                                >
                                    <Link className="deguzmanrecipesanywhere-btn" color="white" to="/recipes">DeGuzmanRecipesAnywhere</Link>
                            </Button>
                            <br></br>
                            <Button 
                                size="lg" 
                                variant="dark"
                                onClick={(event:any) => this.onSubmit(event)}>
                                    Login
                            </Button>
                            <Button 
                                size="lg" 
                                variant="dark"
                                className="button-margin"
                            >
                                <Link to="/register" className="register-btn">Register</Link>        
                            </Button>
                        </Form>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}