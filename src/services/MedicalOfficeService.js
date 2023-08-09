import Axios from 'axios';

const getAllMedicalOffices = () => {
    return Axios.get('http://localhost:8080/app/medical-offices/all');
}

const getAllMedicalOfficeInfo = (params) => {
    return Axios.get('http://localhost:8080/app/medical-offices/all-medical-offices', {params});
}

const getMedicalOfficesByZip = (data) => {
    return Axios.get(`http://localhost:8080/app/medical-offices/offices/search/zip`,data)
}

const getMedicalOfficeById = (medicalOfficeId) => {
    return Axios.get(`http://localhost:8080/app/medical-offices/offices/search/id/${medicalOfficeId}`);
}

const getMedicalTrxCount = () => {
    return Axios.get('http://localhost:8080/app/medical-transactions/count')
}

const addMedicalOffice = (newData) => {
    return Axios.post("http://localhost:8080/app/medical-offices/add", newData);
}

const updateMedicalOfficeInformation = (medicalOfficeId,data) => {
    return Axios.put(`http://localhost:8080/app/medical-offices/update/${medicalOfficeId}`,data);
}

const deleteMedicalOffice = (medicalOfficeId) => {
    return Axios.delete(`http://localhost:8080/app/medical-offices/delete/${medicalOfficeId}`);
}

const deleteAllMedicalOffices = () => {
    return Axios.delete('http://localhost:8080/app/medical-offices/delete-all');
}


export default {
    getAllMedicalOffices,
    addMedicalOffice,
    getAllMedicalOfficeInfo,
    getMedicalOfficesByZip,
    deleteAllMedicalOffices,
    getMedicalOfficeById,
    getMedicalTrxCount,
    updateMedicalOfficeInformation,
    deleteMedicalOffice
}