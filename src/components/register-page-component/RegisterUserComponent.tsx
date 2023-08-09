import React from  'react';
import Axios from 'axios';
import { Button,Container, Form } from 'react-bootstrap';
import '../../style-sheets/register-page.css';

export class RegisterUserComponent extends React.Component<any,any> {
    constructor(props:any) {
        super(props);

        this.state  = {
            userid: 0,
            username: "",
            password: "",
            name: "",
            email: "",
            shouldRedirect: false
        }
    }

    onHandleUsernameChange =  (event:any) => {
        this.setState({
            username: event.target.value
        });
    }

    onHandlePassword = (event:any) => {
        this.setState({
            password: event.target.value
        });
    }

    onHandleNameChange = (event:any) => {
        this.setState({
            name: event.target.value
        });
    }

    onHandleEmailChange = (event:any) => {
        this.setState({
            email: event.target.value
        });
    }

    createUser = async () => {
        
        const headers = {
            'Content-Type' : 'application/json'
        }

        const user = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
        }

        const createUserResponse = await Axios({
            method: "post",
            url: 'http://localhost:8080/api/auth/signup',
            headers: headers,
            data: user
        });

        this.setState({
            ...this.state,
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
        });

        window.location.reload();
        alert(`${this.state.username} was created. Wait for user to be enabled or contact admin`)
    }

    render() {
        return (
            <div>
                <Container className="register-container">
                    <h1>Register User</h1>
                    <Form>
                            <Form.Group controlId="formGroupUsername">
                                <Form.Label className="register-container-title">DeGuzmanStuffAnywhere</Form.Label>
                                <hr></hr>
                                {/* <Form.Label className="login-form-label">Username</Form.Label> */}
                                <Form.Control 
                                    type="text"
                                    name="Username" 
                                    className="login-form-input" 
                                    placeholder="Enter username" 
                                    value={this.state.username}
                                    onChange={(event: any) => this.onHandleUsernameChange(event)} 
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                {/* <Form.Label className="login-form-label">Password</Form.Label> */}
                                <Form.Control 
                                    type="password" 
                                    name="Password"
                                    className="login-form-input" 
                                    placeholder="Password" 
                                    value={this.state.password}
                                    onChange={(event:any) => this.onHandlePassword(event)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupName">
                                {/* <Form.Label className="login-form-label">Password</Form.Label> */}
                                <Form.Control 
                                    type="text" 
                                    name="Name"
                                    className="login-form-input" 
                                    placeholder="Name" 
                                    value={this.state.name}
                                    onChange={(event:any) => this.onHandleNameChange(event)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                {/* <Form.Label className="login-form-label">Password</Form.Label> */}
                                <Form.Control 
                                    type="text" 
                                    name="Email"
                                    className="login-form-input" 
                                    placeholder="Email" 
                                    value={this.state.email}
                                    onChange={(event:any) => this.onHandleEmailChange(event)}
                                />
                            </Form.Group>
                            <br></br>
                            <Button 
                                size="lg" 
                                variant="dark"
                                onClick={() => this.createUser()}>
                                    Submit
                            </Button>
                        </Form>
                </Container>
            </div>
        )
    }
}