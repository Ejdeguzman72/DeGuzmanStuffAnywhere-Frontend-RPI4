import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllVehicleInformation = () => {
    return Axios.get('http://192.168.1.36:8080/app/vehicles/all', { headers: authHeader() });
}

const getAllVehicles = (params) => {
    return Axios.get('http://192.168.1.36:8080/app/vehicles/all-vehicles', { headers: authHeader(), params });
}

const getVehicleInformationById = (vehicleId) => {
    return Axios.get(`http://192.168.1.36:8080/app/vehicles/vehicle/id/${vehicleId}`, { headers: authHeader() });
}

const addVehicleInformation = (data) => {
    return Axios.post(`http://192.168.1.36:8080/app/vehicles/add`,data, { headers: authHeader() });
}

const updateVehicleInformation = (vehicleId,data) => {
    return Axios.put(`http://192.168.1.36:8080/app/vehicles/update/${vehicleId}`,data, { headers: authHeader() });
}

const deleteAllVehicles = () => {
    return Axios.delete('http://192.168.1.36:8080/app/vehicles/delete-all-vehicles', { headers: authHeader() });
}

const deleteVehicle = (vehicleId) => {
    return Axios.delete(`http://192.168.1.36:8080/app/vehicles/delete/${vehicleId}`, { headers: authHeader() });
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