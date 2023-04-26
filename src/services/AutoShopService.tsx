import React from 'react';
import Axios from 'axios';

const getAllAutoShops = (params:any) => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all-shops', { params });
}

const getAllAutoShopsInfo = () => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all');
}

const getAutoShopById = (data:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/search/id`,data);
}

const addAutoShop = (newData:any) => {
    return Axios.post("http://localhost:8080/app/auto-repair-shops/add-auto-shop", newData);
}

const updateAutoShop = (data:any) => {
    return Axios.put(`http://localhost:8080/app/auto-repair-shops/repair-shop/update`,data);
}

const deleteAutoShop = (data:any) => {
    return Axios.delete(`http://localhost:8080/app/auto-repair-shops/delete`,data);
}

const deleteAllShopInformation = () => {
    return Axios.delete('http://localhost:8080/app/auto-repair-shops/delete-all');
}


export default {
    getAllAutoShops,
    addAutoShop,
    deleteAllShopInformation,
    getAllAutoShopsInfo,
    getAutoShopById,
    updateAutoShop,
    deleteAutoShop
}