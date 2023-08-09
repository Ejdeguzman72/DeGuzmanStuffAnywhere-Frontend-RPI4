import Axios from 'axios';

const getAllVehicleInformation = () => {
    return Axios.get('http://localhost:8080/app/vehicles/all');
}

const getAllVehicles = (params:any) => {
    return Axios.get('http://localhost:8080/app/vehicles/all-vehicles', { params });
}

const getVehicleInformationById = (vehicleId:any) => {
    return Axios.get(`http://localhost:8080/app/vehicles/vehicle/id/${vehicleId}`);
}

const addVehicleInformation = (data:any) => {
    return Axios.post(`http://localhost:8080/app/vehicles/add`,data);
}

const updateVehicleInformation = (vehicleId:any,data:any) => {
    return Axios.put(`http://localhost:8080/app/vehicles/update/${vehicleId}`,data);
}

const deleteAllVehicles = () => {
    return Axios.delete('http://localhost:8080/app/vehicles/delete-all-vehicles');
}

const deleteVehicle = (vehicleId:any) => {
    return Axios.delete(`http://localhost:8080/app/vehicles/delete/${vehicleId}`);
}

export default {
    getAllVehicleInformation,
    getAllVehicles,
    deleteAllVehicles,
    addVehicleInformation,
    getVehicleInformationById,
    updateVehicleInformation,
    deleteVehicle
};