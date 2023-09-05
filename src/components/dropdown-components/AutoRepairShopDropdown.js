import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import authHeader from '../../services/AuthHeader';

function AutoRepairShopDropdown(props) {
    const [autoShops, setAutoShops] = useState([]);
    const [singleAutoShop, setSingleAutoShop] = useState([]);

    useEffect(function () {
        Axios.get('http://localhost:8080/app/auto-repair-shops/all',{ headers: authHeader() })
            .then((response) => setAutoShops(response.data.list))
            .then((error) => console.log(error));
    }, []);

    const handleChange = (event) => {
        props.handleAutoShop(event.target.value);
    }

    return (
        <select 
            id="autoShopId"
            name="autoShopId"
            className="form-control"
            value={autoShops.autoShopId}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select an Auto Repair Shop</option>
            {autoShops.map((autoShop) => (
                <option key={autoShop.autoShopId} value={autoShop.autoShopId}>
                    {autoShop.address}
                </option>
            ))}
        </select>
    );
}

export default AutoRepairShopDropdown;