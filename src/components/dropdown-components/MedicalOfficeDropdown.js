import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import authHeader from '../../services/AuthHeader';

function MedicalOfficeDropdown(props) {
    const [medicalOffices, setMedicalOffices] = useState([]);
    const [singleMedicalOffice, setSingleMedicalOffice] = useState([]);

    useEffect(function () {
        Axios.get('http://192.168.1.36:8080/app/medical-offices/all', { headers: authHeader() })
            .then((response) => setMedicalOffices(response.data.list))
            .then((error) => console.log(error));
    }, []);

    const handleChange = (event) => {
        props.handleMedicalOffice(event.target.value);
    }

    return (
        <select 
            id="medicalOfficeId"
            name="medicalOfficeId"
            className="form-control"
            value={medicalOffices.medicalOfficeId}
            type="number"
            onChange={handleChange}
        >
            <option value="0">Select A Medical Office</option>
            {medicalOffices.map((medicalOffice) => (
                <option key={medicalOffice.medicalOfficeId} value={medicalOffice.medicalOfficeId}>
                    {medicalOffice.name}
                </option>
            ))}
        </select>
    );
}

export default MedicalOfficeDropdown;