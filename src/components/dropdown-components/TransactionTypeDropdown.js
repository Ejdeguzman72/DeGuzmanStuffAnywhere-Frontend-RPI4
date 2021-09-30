import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const TransactionTypeDropdown = () => {
    const [items, setItems] = useState([]);

    const handleInputChange = (event) => {
        setItems(event.target.value)
    }

    useEffect(() => {
        Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/transaction-types/all')
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
                <option value="Select a Transaction Type">Select a Transaction Type</option>
                {items.map((item) => <option value={item.transaction_type_descr}>{item.transaction_type_descr}</option>)}
            </select>
        </div>
    )
}

export default TransactionTypeDropdown;