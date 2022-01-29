import Axios from 'axios';

const getAllVehicleInformation = () => {
    return Axios.get('http://localhost:8080/app/vehicles/all');
}

const getAllVehicles = (params:any) => {
    return Axios.get('http://localhost:8080/app/vehicles/all-vehicles', { params });
}

const deleteAllVehicles = () => {
    return Axios.delete('http://localhost:8080/app/vehicles/delete-all-vehicles');
}

export default {
    getAllVehicleInformation,
    getAllVehicles,
    deleteAllVehicles
};