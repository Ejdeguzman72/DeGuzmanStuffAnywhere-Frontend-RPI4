import React from 'react';
import Axios from 'axios';

const GetAllRestaurantRecommendations = () => {
    return Axios.get('http://localhost:8080/app/restaurants/all')
}

const getAllRestaurants = (params) => {
    return Axios.get('http://localhost:8080/app/restaurants/all-restaurants', { params });
}

const getRestaurantsByType = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/all/search/type`,data)
}

const getRestaurantsByZip = (data) => {
     return Axios.get(`http://localhost:8080/app/restaurants/all/search/zip`)
}

const getRestaurantsByDescr = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/all/search/descr`,data)
}

const getRestaurantById = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/restaurant/search/id`,data);
}

const getRestaurantsDTOById = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/restaurant-dto/search/id`,data)
}

const getRestaurantByName = (data) => {
    return Axios.get(`http://localhost:8080/app/restaurants/restaurant/search/name`,data)
}

const getRestaurantCount = () => {
    return Axios.get(`http://localhost:8080/app/restaurants/count`)
}

const addRestaurantInformation = (data) => {
    return Axios.post('http://localhost:8080/app/restaurants/add',data);
}

const updateRestaurantInformation = (data) => {
    return Axios.put(`http://localhost:8080/app/restaurants/update`,data);
}

const deleteRestaurantInformation = (data) => {
    return Axios.delete(`http://localhost:8080/app/restaurants/delete`,data);
}

const deleteAllRestaurants = () => {
    return Axios.delete('http://localhost:8080/app/restaurants/delete-all');
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