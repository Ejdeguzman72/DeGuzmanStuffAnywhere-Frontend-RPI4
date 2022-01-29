import React from 'react';
import Axios from 'axios';

const getAllMedicalOffices = () => {
    return Axios.get('http://localhost:8080/app/medical-offices/all');
}

const getAllMedicalOfficeInfo = (params:any) => {
    return Axios.get('http://localhost:8080/app/medical-offices/all-medical-offices', {params});
}

const addMedicalOffice = (newData: any) => {
    return Axios.post("http://localhost:8080/app/medical-offices/add-medical-office-information", newData);
}

const deleteAllMedicalOffices = () => {
    return Axios.delete('http://localhost:8080/app/medical-offices/delete-all-medical-offices');
}


export default {
    getAllMedicalOffices,
    addMedicalOffice,
    getAllMedicalOfficeInfo,
    deleteAllMedicalOffices
}