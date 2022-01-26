import React from 'react';
import Axios from 'axios';

const getAllMedicalOffices = () => {
    return Axios.get('http://localhost:8080/app/medical-offices/all');
}

const addMedicalOffice = (newData: any) => {
    return Axios.post("http://localhost:8080/app/medical-offices/add-medical-office-information", newData);
}


export default {
    getAllMedicalOffices,
    addMedicalOffice
}