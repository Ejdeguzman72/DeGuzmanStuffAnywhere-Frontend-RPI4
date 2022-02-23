import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const VehicleDropdown = (props) => {
    const [vehicles, setVehicles] = useState([]);
    const [singleVehicle, setSingleVehicle] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8080/app/vehicles/all')
            .then((response) => setVehicles(response.data))
            .then((error) => console.log(error));
    }, [])

    {console.log(vehicles)}

    const handleChange = (event) => {
        props.handleVehicle(event.target.value)
    }

    return (
        <select 
            id="vehicleId"
            name="vehicleId"
            value={vehicles.vehicleId}
            className="form-control"
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select A Vehicle</option>
            {vehicles.map((vehicle) => (
                <option key={vehicle.vehicleId} value={vehicle.vehicleId}>
                    {vehicle.make}
                </option>
            ))}
        </select>
    );
}

export default VehicleDropdown;