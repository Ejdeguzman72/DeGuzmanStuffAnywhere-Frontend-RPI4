import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import authHeader from '../../services/AuthHeader';
import CardioTrackerService from '../../services/CardioTrackerService';

function CardioTypesDropdown(props) {
    const [types, setTypes] = useState([]);
    const [type, setType] = useState([]);

    useEffect(function () {
        CardioTrackerService.getAllCardioTypes()
            .then(response => {
                console.log(response.data)
                setTypes(response.data.list)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const handleChange = (event) => {
        props.handleCardioType(event.target.value);
    }

    return (
        <select 
            id="cardioTypeId"
            name="cardioTypeId"
            className="form-control"
            value={types.cardioTypeId}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select a cardio type</option>
            {types.map((type) => (
                <option key={type.cardioTypeId} value={type.cardioTypeId}>
                    {type.descr}
                </option>
            ))}
        </select>
    );
}

export default CardioTypesDropdown;