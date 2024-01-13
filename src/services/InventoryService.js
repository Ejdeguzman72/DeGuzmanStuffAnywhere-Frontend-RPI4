import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllInventory = () => {
    return Axios.get('http://192.168.1.36:8080/app/inventory/all', { headers: authHeader() });
}

const getAllInventoryPagination = (params) => {
    return Axios.get('http://192.168.1.36:8080/app/inventory/all-inventory', { headers: authHeader(), params } );
};

const getAllInventoryByLocation = (location) => {
    return Axios.get(`http://192.168.1.36:8080/app/inventory/exercises/search/user/${location}`, { headers: authHeader() });
}

const getAllInventoryByCondition = (condition) => {
    return Axios.get(`http://192.168.1.36:8080/app/inventory/exercise/search/type/${condition}`), { headers: authHeader() };
}

const addInventoryInformation = (data) => {
    return Axios.post('http://192.168.1.36:8080/app/inventory/add',data, { headers: authHeader() });
}

const updateInventoryInformation = (data) => {
    return Axios.put(`http://192.168.1.36:8080/app/inventory/update`,data, { headers: authHeader() });
}

const deleteInventory = (data) => {
    return Axios.delete(`http://192.168.1.36:8080/app/inventory/delete`,data, { headers: authHeader() });
}

const deleteAllInventory = () => {
    return Axios.delete('http://192.168.1.36:8080/app/inventory/delete-all', { headers: authHeader() });
}

export default {
    getAllInventory,getAllInventoryPagination,getAllInventoryByLocation,getAllInventoryByCondition,
    addInventoryInformation,updateInventoryInformation,deleteInventory,deleteAllInventory
}