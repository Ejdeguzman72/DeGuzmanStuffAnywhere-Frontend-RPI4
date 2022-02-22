import React from 'react';
import Axios from 'axios';

const getAllAutoShops = (params:any) => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all-shops', { params });
}

const getAllAutoShopsInfo = () => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all');
}

const getAutoShopById = (auto_shop_id:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/${auto_shop_id}`);
}

const addAutoShop = (newData: any) => {
    return Axios.post("http://localhost:8080/app/auto-repair-shops/add-auto-shop", newData);
}

const updateAutoShop = (auto_shop_id:any, data:any) => {
    return Axios.put(`http://localhost:8080/app/auto-repair-shops/repair-shop/${auto_shop_id}`,data);
}

const deleteAutoShop = (auto_shop_id:any) => {
    return Axios.delete(`http://localhost:8080/app/auto-repair-shops/repair-shop/${auto_shop_id}`);
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