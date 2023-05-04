import Axios from 'axios';

const getAllMedicalOffices = () => {
    return Axios.get('http://localhost:8080/app/medical-offices/all');
}

const getAllMedicalOfficeInfo = (params:any) => {
    return Axios.get('http://localhost:8080/app/medical-offices/all-medical-offices', {params});
}

const getMedicalOfficesByZip = (data:any) => {
    return Axios.get(`http://localhost:8080/app/medical-offices/offices/search/zip`,data)
}

const getMedicalOfficeById = (data:any) => {
    return Axios.get(`http://localhost:8080/app/medical-offices/offices/search/id`,data);
}

const getMedicalTrxCount = () => {
    return Axios.get('http://localhost:8080/app/medical-transactions/count')
}

const addMedicalOffice = (newData:any) => {
    return Axios.post("http://localhost:8080/app/medical-offices/add", newData);
}

const updateMedicalOfficeInformation = (data:any) => {
    return Axios.put(`http://localhost:8080/app/medical-offices/update`,data);
}

const deleteMedicalOffice = (data:any) => {
    return Axios.delete(`http://localhost:8080/app/medical-offices/delete`,data);
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