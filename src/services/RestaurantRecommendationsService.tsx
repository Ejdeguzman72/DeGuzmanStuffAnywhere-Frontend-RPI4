import React from 'react';
import Axios from 'axios';

const GetAllRestaurantRecommendations = () => {
    return Axios.get('http://localhost:8080/app/restaurants/all')
}

export default {
    GetAllRestaurantRecommendations
}