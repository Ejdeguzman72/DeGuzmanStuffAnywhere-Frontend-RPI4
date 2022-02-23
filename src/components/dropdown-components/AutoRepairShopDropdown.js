import React, { useState, useEffect } from 'react'
import Axios from 'axios';

function AutoRepairShopDropdown(props) {
    const [autoShops, setAutoShops] = useState([]);
    const [singleAutoShop, setSingleAutoShop] = useState([]);

    useEffect(function () {
        Axios.get('http://localhost:8080/app/auto-repair-shops/all')
            .then((response) => setAutoShops(response.data))
            .then((error) => console.log(error));
    }, []);

    const handleChange = (event) => {
        props.handleAutoShop(event.target.value);
        console.log(event.target.value);
    }

    return (
        <select 
            id="auto_shop_id"
            name="auto_shop_id"
            className="form-control"
            value={autoShops.auto_shop_id}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select an Auto Repair Shop</option>
            {autoShops.map((autoShop) => (
                <option key={autoShop.auto_shop_id} value={autoShop.auto_shop_id}>
                    {autoShop.address}
                </option>
            ))}
        </select>
    );
}

export default AutoRepairShopDropdown;