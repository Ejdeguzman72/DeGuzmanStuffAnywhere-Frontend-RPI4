import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const TransactionTypeDropdown = (props) => {
    const [types, setTypes] = useState([]);
    const [singleType, setSingleType] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/app/transaction-types/all')
            .then((response) => setTypes(response.data))
            .then((error) => console.log(error));
    }, [])

    const handleChange = (event) => {
        props.handleTransactionType(event.target.value)
    }

    return (
        <select 
            id="transaction_type_id"
            name="transaction_type_id"
            className="form-control"
            value={types.transaction_type_id}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select A Transaction Type</option>
            {types.map((type) => (
                <option key={type.transaction_type_id} value={type.transaction_type_id}>
                    {type.transaction_type_descr}
                </option>
            ))}
        </select>
    );
}

export default TransactionTypeDropdown;