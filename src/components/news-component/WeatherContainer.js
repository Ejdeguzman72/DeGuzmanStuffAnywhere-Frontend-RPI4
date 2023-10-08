import React, { useState,useEffect } from 'react';
import NewsroomService from '../../services/NewsService';
import NewsRoomRoutes from '../route-components/NewsroomRoutes';

const WeatherContainer = () => {

    const [weather,setWeather] = useState(null);

    const getWeather = () => {
        NewsroomService.getWeather()
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    useEffect(() => {
        getWeather();
    })

    return (
        <div>

        </div>
    )
}

export default WeatherContainer

