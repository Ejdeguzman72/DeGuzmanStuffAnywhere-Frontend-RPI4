import React, { useState, useEffect } from 'react'
import Axios from 'axios';

function UserDropdown(props) {
    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState([]);

    useEffect(function () {
        Axios.get('http://localhost:8080/app/users/all')
            .then((response) => setUsers(response.data.list))
            .then((error) => console.log(error));
    }, []);

    const handleChange = (event) => {
        props.handleUser(event.target.value);
    }

    return (
        <select 
            id="userId"
            name="userId"
            value={users.userId}
            type="number"
            className="form-control"
            onChange={handleChange}
        >
            <option value="0">Select A User</option>
            {users.map((user) => (
                <option key={user.userId} value={user.userId}>
                    {user.username}
                </option>
            ))}
        </select>
    );
}

export default UserDropdown;