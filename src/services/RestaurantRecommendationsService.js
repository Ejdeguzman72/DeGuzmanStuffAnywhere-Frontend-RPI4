import React from 'react';
import Axios from 'axios';

const GetAllRestaurantRecommendations = () => {
    return Axios.get('http://localhost:8080/app/restaurants/all')
}

const getAllRestaurants = (params) => {
    return Axios.get('http://localhost:8080/app/restaurants/all-restaurants', { params });
}

const getRestaurantById = (restaurant_id) => {
    return Axios.get(`http://localhost:8080/app/restaurants/restaurant/${restaurant_id}`);
}

const addRestaurantInformation = (data) => {
    return Axios.post('http://localhost:8080/app/restaurants/add-restaurant-information',data);
}

const updateRestaurantInformation = (restaurant_id, data) => {
    return Axios.put(`http://localhost:8080/app/restaurants/restaurant/${restaurant_id}`,data);
}

const deleteRestaurantInformation = (restaurant_id) => {
    return Axios.delete(`http://localhost:8080/app/restaurants/restaurant/${restaurant_id}`);
}

const deleteAllRestaurants = () => {
    return Axios.delete('http://localhost:8080/app/restaurants/delete-all-restaurant');
}

export default {
    GetAllRestaurantRecommendations,
    getAllRestaurants,
    deleteAllRestaurants,
    getRestaurantById,
    addRestaurantInformation,
    updateRestaurantInformation,
    deleteRestaurantInformation
}