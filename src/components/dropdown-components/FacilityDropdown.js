import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const FacilityDropdown = () => {
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setItems(event.target.value)
    }

    useEffect(() => {
        Axios.get('localhost:8080/app/facility/all')
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
                <option value="Select a Facility">Select a Facility</option>
                {items.map((item) => <option value={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default FacilityDropdown;