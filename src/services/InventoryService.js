import Axios from 'axios';

const getAllInventory = () => {
    return Axios.get('http://localhost:8080/app/inventory/all');
}

const getAllInventoryPagination = (params) => {
    return Axios.get('http://localhost:8080/app/inventory/all-inventory', { params } );
};

const getAllInventoryByLocation = (data) => {
    return Axios.get(`http://localhost:8080/app/inventory/exercises/search/user`,data);
}

const getAllInventoryByCondition = (data) => {
    return Axios.get(`http://localhost:8080/app/inventory/exercise/search/type`,data);
}

const addInventoryInformation = (data) => {
    return Axios.post('http://localhost:8080/app/inventory/add',data);
}

const updateInventoryInformation = (data) => {
    return Axios.put(`http://localhost:8080/app/inventory/update`,data);
}

const deleteInventory = (data) => {
    return Axios.delete(`http://localhost:8080/app/inventory/delete`,data);
}

const deleteAllInventory = () => {
    return Axios.delete('http://localhost:8080/app/inventory/delete-all');
}

export default {
    getAllInventory,getAllInventoryPagination,getAllInventoryByLocation,getAllInventoryByCondition,
    addInventoryInformation,updateInventoryInformation,deleteInventory,deleteAllInventory
}