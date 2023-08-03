import Axios from 'axios';

const getAllAutoShops = (params:any) => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all-shops', { params });
}

const getAllAutoShopsInfo = () => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all');
}

const getAutoShopsByZip = (zip:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/all/search/zip/${zip}`);
}

const getAutoShopById = (autoShopId:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/search/id/${autoShopId}`);
}

const searchAutoShopByName = (name:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/search/name${name}`);
}

const getAutoShopCount = () => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/count`);
}

const addAutoShop = (newData: any) => {
    return Axios.post("http://localhost:8080/app/auto-repair-shops/add", newData);
}

const updateAutoShop = (autoShopId:any, autoShop:any) => {
    return Axios.put(`http://localhost:8080/app/auto-repair-shops/update/${autoShopId}`,autoShop);
}

const deleteAutoShop = (autoShopId:any) => {
    return Axios.delete(`http://localhost:8080/app/auto-repair-shops/delete/${autoShopId}`);
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
    deleteAutoShop,
    getAutoShopsByZip,
    searchAutoShopByName,
    getAutoShopCount
}