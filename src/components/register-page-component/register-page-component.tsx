import React from 'react';
import { Helmet } from 'react-helmet';
import { RegisterUserComponent } from './RegisterUserComponent';

export class RegisterPageComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Register User</title>
                </Helmet>
                <div id="white-background">
                    <br></br><br></br>
                    <RegisterUserComponent />
                </div>
            </div>
        )
    }
}