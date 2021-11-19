import React from 'react';
import Axios from 'axios';
import { TextField } from '@material-ui/core';
import { Row, Container, Col, Button } from 'react-bootstrap';
import '../../../style-sheets/admin-portal.css';

export default class AddUserForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            userid: 0,
            username: "",
            password: "",
            name: "",
            user_status: 0,
            role_id: 0
        }
    }

    onHandleUsername = (event: any) => {
        this.setState({
            username: event.target.value
        });
    }

    onHandlePassword = (event: any) => {
        this.setState({
            password: event.target.value
        });
    }

    onHandleName = (event: any) => {
        this.setState({
            name: event.target.value
        });
    }

    onHandleUserStatus = (event: any) => {
        this.setState({
            user_status: event.target.value
        });
    }

    onHandleRole = (event: any) => {
        this.setState({
            role_id: event.target.value
        });
    }

    onSubmit = (event: any) => {
        event.preventDefault();

        const userInfo = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            user_status: this.state.user_status,
            role_id: this.state.role_id
        };

        const url = "http://localhost:8080/app/users/add-user";

        Axios.post(url, userInfo);

        if (userInfo) {
            return <button>hello</button>
        }

        if (this.state.username === "") {
            alert(`Username field must be filled out`);
        }

        if (this.state.password === "") {
            alert(`password field must be filled out`)
        }

        if (this.state.name === "") {
            alert(`name field must notbe null`)
        }
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off">
                <br></br>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <Container className="admin-portal-add-user-container">
                            <h1>Enter the following information:</h1>
                            <br></br>
                            <TextField id="filled-basic" label="Username" variant="filled" className="input-at-portal"/>
                            <br></br>  <br></br>
                            <TextField id="filled-basic" label="Password" variant="filled" className="input-at-portal"/>
                            <br></br>  <br></br>
                            <TextField id="filled-basic" label="Name" variant="filled" className="input-at-portal"/>
                            <br></br>  <br></br>
                            <TextField id="filled-basic" label="User Status" variant="filled" className="input-at-portal"/>
                            <br></br>  <br></br>
                            <TextField id="filled-basic" label="User Role" variant="filled" className="input-at-portal"/>
                            <br></br>  <br></br>
                            <Button variant="dark" size="lg" className="add-user-admin-portal-button">Submit</Button>
                        </Container>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                </form>
            </div>
        )
    }
}