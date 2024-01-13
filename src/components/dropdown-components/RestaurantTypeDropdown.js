import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import authHeader from '../../services/AuthHeader';

function RestaurantTypeDropdown(props) {
    const [types, setTypes] = useState([]);
    const [singleType, setSingleType] = useState([]);

    useEffect(function () {
        Axios.get('http://192.168.1.36:8080/app/restaurant-types/all', { headers: authHeader() })
            .then((response) => setTypes(response.data.list))
            .then((error) => console.log(error));
    }, []);

    const handleChange = (event) => {
        props.handleRestaurantType(event.target.value);
    }

    return (
        <select 
            id="restaurantTypeId"
            name="restaurantTypeId"
            className="form-control"
            value={types.restaurant_type_id}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select A Restaurant Type</option>
            {types.map((type) => (
                <option key={type.restaurantTypeId} value={type.restaurantTypeId}>
                    {type.descr}
                </option>
            ))}
        </select>
    );
}

export default RestaurantTypeDropdown;