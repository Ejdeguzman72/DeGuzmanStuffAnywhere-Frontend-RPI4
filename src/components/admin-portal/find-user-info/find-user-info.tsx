import React from 'react';
import { TextField } from '@material-ui/core';
import '../../../style-sheets/admin-portal.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { isNull } from 'util';
import Axios from 'axios';

export default class FindUserInfo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userid: 0,
            username: "",
            password: "",
            name: "",
            user_status: 0,
            role_id: 0,
            userInfo: []
        }

        const userid = this.state.userid;
        const username = this.state.username;
    }

    onHandleUserID = (event: any) => {
        if (this.state.userid != null && this.state.username == "") {
            console.log("This is this userid");
            console.log(this.state.userid);
            this.setState({
                userid: event.target.value
            });
        }
        else if (this.state.userid != null && this.state.username != null) {
            alert(`You must fill out these fields one at a time. Either fill out information for username or userid`);
        }
    }

    onHandleUsername = (event: any) => {
        this.setState({
            username: event.target.value
        });
    }

    onSubmit = (event: any) => {
        event.preventDefault();
        const url = `http:ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/users/user/${this.state.userid}`;
        if (this.state.userid != 0) {
            Axios.get(url)
                .then(payload => {
                    this.setState({
                        ...this.state,
                        userInfo: {
                            userid: payload.data.userid,
                            username: payload.data.username,
                            pasword: payload.data.password,
                            name: payload.data.name,
                            user_status: payload.data.user_status,
                            role_id: payload.data.role_id
                        }
                    })
                })
        }
    }


    render() {
        return (
            <div>
                <br></br>
                <Row>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>
                        <Container className="admin-portal-find-user-container">
                            <h1>Enter the following Information:</h1>
                            <TextField id="filled-basic" label="User ID No:" variant="filled" className="input-at-portal" onChange={(event: any) => this.onHandleUserID(event)} />
                            <br></br>
                            <h3>Or</h3>
                            <TextField id="filled-basic" label="Username" variant="filled" className="input-at-portal" onChange={(event: any) => this.onHandleUsername(event)} />
                            <br></br><br></br>
                            <Button size="lg" variant="dark">Submit</Button>
                        </Container>
                        <br></br>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
                <br></br><br></br>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <Container className="admin-portal-user-info-container">
                            <Row>
                                <h1 text-align="center">User Info</h1>
                            </Row>
                            <hr></hr>
                            <Row>
                                <p>ID No: {this.state.userid} </p>
                            </Row>
                            <Row>
                                <p>Username: {this.state.username}</p>
                            </Row>
                            <Row>
                                <p>Password: {this.state.password}</p>
                            </Row>
                            <Row>
                                <p>Name: {this.state.name}</p> 
                            </Row>
                            <Row>
                                <p>User Status: {this.state.user_status}</p>
                            </Row>
                            <Row>
                                <p>Role: {this.state.role_id}</p>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </div>
        )
    }
}