import React, { useState,useEffect } from 'react';
import NewsroomService from '../../services/NewsService';

const JokeContainer = () => {

    const [joke,setJoke] = useState(null);

    const getWeather = () => {
        NewsroomService.getJoke()
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

export default JokeContainer;

