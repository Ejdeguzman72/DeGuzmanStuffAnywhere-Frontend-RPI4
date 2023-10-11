import React, { useState, useEffect } from 'react';
import NewsroomService from '../../services/NewsService';
import NewsRoomRoutes from '../route-components/NewsroomRoutes';
import ReactCardFlip from 'react-card-flip';
import { Button } from 'react-bootstrap'

const WeatherContainer = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [weather, setWeather] = useState({
        clouds: "",
        main: "",
        description: "",
        wind: "",
        city: "",
        mainTemp: 0,
        minTemp: 0,
        maxTemp: 0,
        humidity: 0,

    });

    const convertKelvinToFahrenheit = (kelvin) => {
        return Math.round((kelvin - 273.15) * 1.8 + 32)
    }

    const getWeather = () => {
        const city = "New York"
        NewsroomService.getWeatherForCity(city)
            .then(response => {
                console.log(response.data)
                const data = response.data
                setWeather({
                    clouds: data.clouds.all,
                    main: data.weather.main,
                    city: data.name,
                    mainTemp: convertKelvinToFahrenheit(data.main.temp),
                    minTemp: convertKelvinToFahrenheit(data.main.temp_min),
                    maxTemp: convertKelvinToFahrenheit(data.main.temp_max),
                    humidity: data.main.humidity
                })
            })
            .catch(error => {
                console.log(error)
            }, []);
    }

    useEffect(() => {
        // getWeather();
    }, [])

    return (
        <><div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div style={{
                    width: '300px',
                    height: '200px',
                    background: '#d7fbda',
                    fontSize: '40px',
                    color: 'black',
                    margin: '20px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '50px',
                    boxShadow: '5px 10px 18px #888888',
                    borderColor: 'black',
                    backgroundColor: '#FFF5EE',
                    fontFamily: 'fantasy',
                }}>
                    <h2>Weather : {weather.mainTemp} F</h2>
                    <p></p>
                    <Button variant="info" onClick={() => setIsFlipped(!isFlipped)}>Click</Button>
                </div>
                <div style={{
                    width: 'auto',
                    height: 'auto',
                    background: '#fbd7f8',
                    fontSize: '20px',
                    color: 'black',
                    // margin: '20px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '50px',
                    boxShadow: '5px 10px 18px #888888',
                    borderColor: 'black',
                    backgroundColor: '#FFF5EE',
                    fontFamily: 'fantasy',
                }}>
                    <h2>Weather : {weather.city}</h2>
                    <p>Main Temperature: {weather.mainTemp} F</p>
                    <p>Minimum Forecast: {weather.minTemp} F</p>
                    <p>Max Forecast: {weather.maxTemp} F</p>
                    <p>Humidity: {weather.humidity}</p>
                    <p>Clouds: {weather.clouds}</p>
                    <Button variant="info" onClick={() => setIsFlipped(!isFlipped)}>Click</Button>
                </div>
            </ReactCardFlip>
        </div><div>

            </div></>
    )
}

export default WeatherContainer

