import React from 'react';
import Axios from 'axios';

const getAllAutoShops = () => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all');
}

const addAutoShop = (newData: any) => {
    return Axios.post("http://localhost:8080/app/auto-repair-shops/add-auto-shop", newData);
}


export default {
    getAllAutoShops,
    addAutoShop
}