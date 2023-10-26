import React, { useState, useEffect } from 'react'
import EntertainmentService from '../../services/EntertainmentService';

function EntertainmentTypesDropdown(props) {
    const [types, setTypes] = useState([]);
    const [type, setType] = useState([]);

    useEffect(function () {
        EntertainmentService.getAllEntertainmentTypes()
            .then(response => {
                console.log(response.data)
                setTypes(response.data.list)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    const handleChange = (event) => {
        props.handleEntertainmentType(event.target.value);
    }

    return (
        <select 
            id="entertainmentTypeId"
            name="entertainmentTypeId"
            className="form-control"
            value={types.entityId}
            type="text"
            onChange={handleChange}
        >
            <option value="0">Select a type</option>
            {types.map((type) => (
                <option key={type.entertainmentTypeId} value={type.entertainmentTypeId}>
                    {type.descr}
                </option>
            ))}
        </select>
    );
}

export default EntertainmentTypesDropdown;