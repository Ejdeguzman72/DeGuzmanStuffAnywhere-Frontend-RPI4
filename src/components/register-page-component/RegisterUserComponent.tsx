import React from  'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

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
            password: this.state.password
        }

        const createUserResponse = await Axios({
            method: "post",
            url: 'http://localhost:8080/register',
            headers: headers,
            data: user
        });

        console.log(createUserResponse.data + " This is data");

        this.setState({
            ...this.state,
            username: this.state.password,
            password: this.state.password,
            name: this.state.name,
            email: this.state.email
        });
    }
}