import React from 'react';
import { TextField } from '@material-ui/core';
import '../../../style-sheets/admin-portal.css';

export default class FindUserInfo extends React.Component<any,any> {
    constructor(props:any) {
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
    }

    onHandleUserID = (event:any) => {
        this.setState({
            userid: event.target.value
        });
    }

    onHandleUsername = (event:any) => {
        this.setState({
            username: event.target.value
        });
    }
    render() {
        return (
            <div>
                <br></br>
                 <TextField id="filled-basic" label="User ID No:" variant="filled" className="input-at-portal"/>
                 <br></br><br></br>
                 <TextField id="filled-basic" label="Username" variant="filled" className="input-at-portal"/>
            </div>
        )
    }
}