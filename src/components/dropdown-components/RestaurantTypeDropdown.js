import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Select from 'react-select'
import { userInfo } from 'os';
import { Restaurant } from '@material-ui/icons';

function RestaurantTypeDropdown(props) {
    const [types, setTypes] = useState([]);
    const [singleType, setSingleType] = useState([]);

    useEffect(function () {
        Axios.get('http://localhost:8080/app/restaurant-types/all')
            .then((response) => setTypes(response.data))
            .then((error) => console.log(error));
    }, []);

    const handleChange = (event) => {
        props.handleRestaurantType(event.target.value);
        console.log(event.target.value);
    }

    return (
        <select 
            id="restaurant_type_id"
            name="restaurant_type_id"
            value={types.restaurant_type_id}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select A Restaurant Type</option>
            {types.map((type) => (
                <option key={type.restaurant_type_id} value={type.restaurant_type_id}>
                    {type.descr}
                </option>
            ))}
        </select>
    );
}

export default RestaurantTypeDropdown;