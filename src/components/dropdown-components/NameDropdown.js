import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FullscreenExit } from '@material-ui/icons';

const NameDropdown = () => {
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setItems(event.target.value)
        console.log(event.target.value);
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/app/users/all')
            .then(response => {
                let data = response.data
                setItems(data);
            })
            .catch(error => {
                console.log(error);
            });
    })

    return (
        <div>
            <select onChange={handleInputChange}>
                <option value="Select a User Type">Select a User</option>
                {items.map((item) => <option value={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default NameDropdown;