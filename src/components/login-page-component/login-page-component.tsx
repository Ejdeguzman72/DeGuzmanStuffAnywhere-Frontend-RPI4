import React from 'react';
import { Helmet } from 'react-helmet';
import { Form } from 'react-bootstrap';
import '../../style-sheets/login-page.css';
import { FooterComponent } from '../footer-component/footer-component';

export class LoginPageComponent extends React.Component<any, any> {
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
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                {/* <Form.Label className="login-form-label">Username</Form.Label> */}
                                <Form.Control type="username" className="login-form-input" placeholder="Enter username" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                {/* <Form.Label className="login-form-label">Password</Form.Label> */}
                                <Form.Control type="password" className="login-form-input" placeholder="Password" />
                            </Form.Group>
                            <p className="login-container-warning">Contact (201)-546-0750
                                or email (ejdeguzman72@gmail.com) for assistance.
                            </p>
                        </Form>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}