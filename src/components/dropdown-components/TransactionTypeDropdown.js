import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const TransactionTypeDropdown = (props) => {
    const [types, setTypes] = useState([]);
    const [singleType, setSingleType] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/app/transaction-types/all')
            .then((response) => setTypes(response.data.list))
            .then((error) => console.log(error));
    }, [])

    const handleChange = (event) => {
        props.handleTransactionType(event.target.value)
    }

    return (
        <select 
            id="trxTypeId"
            name="trxTypeId"
            className="form-control"
            value={types.trxTypeId}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select A Transaction Type</option>
            {types.map((type) => (
                <option key={type.trxTypeId} value={type.trxTypeId}>
                    {type.trxTypeDescr}
                </option>
            ))}
        </select>
    );
}

export default TransactionTypeDropdown;