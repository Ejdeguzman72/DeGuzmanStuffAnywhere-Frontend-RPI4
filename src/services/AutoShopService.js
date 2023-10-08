import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllAutoShops = (params) => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all-shops', { headers: authHeader(), params });
}

const getAllAutoShopsInfo = () => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all', { headers: authHeader() });
}

const getAutoShopsByZip = (zip) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/all/search/zip/${zip}`, { headers: authHeader() });
}

const getAutoShopById = (autoShopId) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/search/id/${autoShopId}`, { headers: authHeader() });
}

const searchAutoShopByName = (name) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/search/name/${name}`, { headers: authHeader() });
}

const getAutoShopCount = () => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/count`, { headers: authHeader() });
}

const addAutoShop = (newData) => {
    return Axios.post("http://localhost:8080/app/auto-repair-shops/add", newData, { headers: authHeader() });
}

const updateAutoShop = (autoShopId,autoShop) => {
    return Axios.put(`http://localhost:8080/app/auto-repair-shops/update/${autoShopId}`,autoShop, { headers: authHeader() });
}

const deleteAutoShop = (autoShopId) => {
    return Axios.delete(`http://localhost:8080/app/auto-repair-shops/delete/${autoShopId}`, { headers: authHeader() });
}

const deleteAllShopInformation = () => {
    return Axios.delete('http://localhost:8080/app/auto-repair-shops/delete-all', { headers: authHeader() });
}


export default {
    getAllAutoShops,
    addAutoShop,
    deleteAllShopInformation,
    getAllAutoShopsInfo,
    getAutoShopById,
    updateAutoShop,
    deleteAutoShop,
    getAutoShopsByZip,
    searchAutoShopByName,
    getAutoShopCount
}