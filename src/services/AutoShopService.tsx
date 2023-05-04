import Axios from 'axios';

const getAllAutoShops = (params:any) => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all-shops', { params });
}

const getAllAutoShopsInfo = () => {
    return Axios.get('http://localhost:8080/app/auto-repair-shops/all');
}

const getAutoShopsByZip = (data:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/all/search/zip`,data);
}

const getAutoShopById = (data:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/search/id`,data);
}

const searchAutoShopByName = (data:any) => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/repair-shop/search/name`,data);
}

const getAutoShopCount = () => {
    return Axios.get(`http://localhost:8080/app/auto-repair-shops/count`);
}

const addAutoShop = (newData: any) => {
    return Axios.post("http://localhost:8080/app/auto-repair-shops/add", newData);
}

const updateAutoShop = (data:any) => {
    return Axios.put(`http://localhost:8080/app/auto-repair-shops/update`,data);
}

const deleteAutoShop = (data:any) => {
    return Axios.delete(`http://localhost:8080/app/auto-repair-shops/delete`);
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