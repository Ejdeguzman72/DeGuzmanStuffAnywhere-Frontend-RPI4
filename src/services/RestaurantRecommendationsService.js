import React from 'react';
import Axios from 'axios';
import authHeader from './AuthHeader';

const GetAllRestaurantRecommendations = () => {
    return Axios.get('http://localhost:8080/app/restaurants/all', { headers: authHeader() })
}

const getAllRestaurants = (params) => {
    return Axios.get('http://localhost:8080/app/restaurants/all-restaurants', { headers: authHeader(), params });
}

const getRestaurantsByType = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/all/search/type`,data, { headers: authHeader() })
}

const getRestaurantsByZip = (data) => {
     return Axios.get(`http://localhost:8080/app/restaurants/all/search/zip`, { headers: authHeader() })
}

const getRestaurantsByDescr = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/all/search/descr`,data, { headers: authHeader() })
}

const getRestaurantById = (restaurantId) => {
    return Axios.get(`http://localhost:8080/app/restaurants/restaurant/search/id/${restaurantId}`, { headers: authHeader() });
}

const getRestaurantsDTOById = (restaurantId) => {
    return Axios.get(`http://localhost:8080/app/restaurants/restaurant-dto/search/id/${restaurantId}`, { headers: authHeader() })
}

const getRestaurantByName = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/restaurant/search/name`,data, { headers: authHeader() })
}

const getRestaurantCount = () => {
    return Axios.get(`http://localhost:8080/app/restaurants/count`, { headers: authHeader() })
}

const addRestaurantInformation = (data) => {
    return Axios.post('http://localhost:8080/app/restaurants/add',data, { headers: authHeader() });
}

const updateRestaurantInformation = (restaurantId,data) => {
    return Axios.put(`http://localhost:8080/app/restaurants/update/${restaurantId}`,data, { headers: authHeader() });
}

const deleteRestaurantInformation = (restaurantId) => {
    return Axios.delete(`http://localhost:8080/app/restaurants/delete/${restaurantId}`, { headers: authHeader() });
}

const deleteAllRestaurants = () => {
    return Axios.delete('http://localhost:8080/app/restaurants/delete-all', { headers: authHeader() });
}

export default {
    GetAllRestaurantRecommendations,
    getAllRestaurants,
    deleteAllRestaurants,
    getRestaurantById,
    addRestaurantInformation,
    updateRestaurantInformation,
    deleteRestaurantInformation,
    getRestaurantsByType,
    getRestaurantCount,
    getRestaurantByName,
    getRestaurantsDTOById,
    getRestaurantsByDescr,
    getRestaurantsByZip
}