import React from 'react';
import Axios from 'axios';

const GetAllRestaurantRecommendations = () => {
    return Axios.get('http://localhost:8080/app/restaurants/all')
}

const getAllRestaurants = (params:any) => {
    return Axios.get('http://localhost:8080/app/restaurants/all-restaurants', { params });
}

const deleteAllRestaurants = () => {
    return Axios.delete('http://localhost:8080/app/restaurants/delete-all-restaurant');
}

export default {
    GetAllRestaurantRecommendations,
    getAllRestaurants,
    deleteAllRestaurants
}