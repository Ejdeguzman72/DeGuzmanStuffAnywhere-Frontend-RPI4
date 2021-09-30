import React from 'react';
import Axios from 'axios';

const GetAllRestaurantRecommendations = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/restaurants/all')
}

export default {
    GetAllRestaurantRecommendations
}